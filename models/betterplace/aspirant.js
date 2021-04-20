
const connection = require("../../connection");
const async = require("async");
const common = require("../../common/commonUtil");
const moment = require("moment");


let createAsprirant = function(mysql, aspirantData, funcCallback){
    // we can have some validation on aspirantData
    let query = "INSERT into aspirant set ?";
    mysql.query(query,[aspirantData], function(err, result){
        if(err){
            console.err("Error: ", err);
            funcCallback(new Error(err.message));
        }else{
            funcCallback(null, result);
        }
    });
}

let getAspirantByID = function(mysql, id, funcCallback){

    let query = "select * from aspirant where id = ?";

    mysql.query(query, [id], function(err, result){
        if(err){
            funcCallback(new Error(err.message));
        }else{
            funcCallback(null, result);
        }
    })
}

let getAspirantByMobile = function(mysql, mobile, funcCallback){

    let query = "select * from aspirant where mobile = ?";

    mysql.query(query, [mobile], function(err, result){
        if(err){
            funcCallback(new Error(err.message));
        }else{
            funcCallback(null, result);
        }
    })
}

let updateAspirantByMobile = function(mysql, mobile, updateObj, funcCallback){

    let query = "update customers set ? where mobile = ?";

    mysql.query(query, [updateObj, mobile], function(err, result){
        if(err){
            funcCallback(new Error(err.message));
        }else{
            funcCallback(null, result);
        }
    })
}

let updateAspirantByID = function(mysql, id, updateObj, funcCallback){

    let query = "update customers set ? where id = ?";

    mysql.query(query, [updateObj, id], function(err, result){
        if(err){
            funcCallback(new Error(err.message));
        }else{
            funcCallback(null, result);
        }
    })
}


module.exports= {
    createAsprirant, 
    getAspirantByID,
    getAspirantByMobile,
    updateAspirantByID,
    updateAspirantByMobile
}