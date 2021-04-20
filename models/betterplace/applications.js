


let createApplication = function(mysql, data, callback){

    let query = "inser into applications set ?";
    mysql.query(query, data, function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    })
}

let getApplicationByAspirantId = function(mysql, id, callback){
    let query = `select app.aspirant_id, app.job_id
                from applications as app
                left join jobs as j ON j.id = app.job_id
                where app.aspirant_id = ? `;

    mysql.query(query, id, function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, err);
        }
    });
}



module.exports = {
    createApplication,
    getApplicationByAspirantId

}
