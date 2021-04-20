const mysql = require("../../connection");
const aspirantModel = require("../../models/betterplace/aspirant");
const async = require("async");
const utils = require("../../common/commonUtil");
const bcrypt = require("bcrypt");
const config = require("../../configs/config")




let registerAspirant = function(data, fuctionCallback){
    async.waterfall([
        function(callback){
            aspirantModel.getAspirantByMobile(mysql, data.mobile, function(err, result){
                if(err){
                    callback(err);
                }else{
                    if(result.length >0){
                        callback(new Error("Aspirant with this moible no already exist"));
                    }else{
                        callback(null);
                    }
                }
            })
        },
        function(callback){
            if(data.password != data.re_password){
                callback(new Error("Pasword and Confim Password did not match"));
            }else{
                data.password = bcrypt.hash(data.password, config.saltRound);
                aspirantModel.createAsprirant(mysql, data, function(err, result){
                    if(err){
                        callback(err);
                    }else{
                        callback(null, result);
                    }
                });
            }
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
    aspirantModel.updateAspirantByMobile(mysql, mobile, updateObj,function(err, result){
        if(err){
            console.error("Error: ", err);
            functionCallback(err);
        }else{
            console.log("OTP is sent and stored in DB");
            functionCallback(err, result);
        }
    })
}


let validateOTPForAsprient = function(obj, functionCallback){
    aspirantModel.getAspirantByMobile(mysql, obj.mobile,function(err, result){
        if(err){
            functionCallback(err);
        }else{
            if(result.length!=0 && obj.otp == result[0].otp){
                 utils.generateTokenWithUid({customer_id : result[0].id}, function(err, result){
                    if(err){
                        functionCallback(err);
                    }else{
                        functionCallback(null, result);
                    }
                });
                
            }else{
                functionCallback(new Error("Customer not found"));
            }
        }
    })
}





module.exports = {
    registerAspirant,
    sendOTP,
    validateOTPForAsprient

}