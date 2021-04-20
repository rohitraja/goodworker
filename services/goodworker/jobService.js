const mysql = require("../../connection");
const jobModel = require("../../models/goodworker/jobs");
const constants = require("../../constants/constants");




let rateCustomer = function(rateObj , ratedBy,  functionCallback){

    let obj = {
        user_id: rateObj.user_id,
        user_type: constants.customer,
        rating: rateObj.rating,
        remark: rateObj.remark,
        rater_by_user_id: ratedBy
    }

    jobModel.createJob(mysql, obj, function(err, result){
        if(err){
            functionCallback(err);
        }else{
            functionCallback(null, result);
        }
    })

}


let rateDriver = function(rateObj , ratedBy,  functionCallback){

    let obj = {
        user_id: rateObj.user_id,
        user_type: constants.driver,
        rating: rateObj.rating,
        remark: rateObj.remark,
        rater_by_user_id: ratedBy
    }

    console.log("Rate Obj: ", obj);

    jobModel.getJobBySkills(mysql, obj, function(err, result){
        if(err){
            functionCallback(err);
        }else{
            functionCallback(null, result);
        }
    })

}



module.exports= {
    rateCustomer,
    rateDriver
}