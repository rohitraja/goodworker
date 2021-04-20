const mysql = require("../../connection");
const recruiterModel = require("../../models/betterplace/recruiter");
const async = require("async");
const utils = require("../../common/commonUtil");




let registerRecruiter = function(data, fuctionCallback){

    async.waterfall([
        function(callback){
            recruiterModel.getRecruiterByMobile(mysql, data.mobile, function(err, result){
                if(err){
                    callback(err);
                }else{
                    if(result.length >0){
                        callback(new Error("Recruiter with this moible no already exist"));
                    }else{
                        callback(null);
                    }
                }
            })
        },
        function(callback){
            recruiterModel.createRecruiter(mysql, data, function(err, result){
                if(err){
                    callback(err);
                }else{
                    callback(null, result);
                }
            })
        }
    ], function(err, result){
        if(err){
            fuctionCallback(err);
        }else{
            fuctionCallback(null, result);
        }
    })  

}

let sendOTP = function(mobile, functionCallback){
    let otp = utils.generateOTP();
    let updateObj = {otp}
    recruiterModel.updateRecruiterByMobile(mysql, mobile, updateObj,function(err, result){
        if(err){
            console.error("Error: ", err);
            functionCallback(err);
        }else{
            console.log("OTP is sent and stored in DB");
            functionCallback(err, result);
        }
    })
}


let validateOTPForDriver = function(obj, functionCallback){
    recruiterModel.getRecruiterByMobile(mysql, obj.mobile,function(err, result){
        if(err){
            functionCallback(err);
        }else{
            if(result.length!=0 && obj.otp == result[0].otp){
                 utils.generateTokenWithUid({driver_id : result[0].id}, function(err, result){
                    if(err){
                        functionCallback(err);
                    }else{
                        functionCallback(null, result);
                    }
                });
                
            }else{
                functionCallback(new Error("Recruiter not found"));
            }
        }
    })
}

module.exports = {
    registerRecruiter,
    sendOTP,
    validateOTPForDriver
}