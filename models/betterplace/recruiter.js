
const connection = require("../../connection");
const async = require("async");
const common = require("../../common/commonUtil");
const moment = require("moment");


let createRecruiter = function(mysql, data, funcCallback){
    // we can have some validation on data
    let query = "INSERT into recruiter set ?";
    mysql.query(query,[data], function(err, result){
        if(err){
            console.err("Error: ", err);
            funcCallback(new Error(err.message));
        }else{
            funcCallback(null, result);
        }
    });
}

let getRecruiterByID = function(mysql, id, funcCallback){

    let query = "select * from recruiter where id = ?";

    mysql.query(query, [id], function(err, result){
        if(err){
            funcCallback(new Error(err.message));
        }else{
            funcCallback(null, result);
        }
    })
}

let getRecruiterByMobile = function(mysql, mobile, funcCallback){

    let query = "select * from recruiter where mobile = ?";

    mysql.query(query, [mobile], function(err, result){
        if(err){
            funcCallback(new Error(err.message));
        }else{
            funcCallback(null, result);
        }
    })
}

let updateRecruiterByMobile = function(mysql, mobile, updateObj, funcCallback){

    let query = "update recruiter set ? where mobile = ?";

    mysql.query(query, [updateObj, mobile], function(err, result){
        if(err){
            funcCallback(new Error(err.message));
        }else{
            funcCallback(null, result);
        }
    })
}

let updateRecruiterById = function(mysql, id, updateObj, funcCallback){

    let query = "update recruiter set ? where id = ?";

    mysql.query(query, [updateObj, id], function(err, result){
        if(err){
            funcCallback(new Error(err.message));
        }else{
            funcCallback(null, result);
        }
    })
}


module.exports= {
    createRecruiter, 
    getRecruiterByID,
    getRecruiterByMobile,
    updateRecruiterById,
    updateRecruiterByMobile
}