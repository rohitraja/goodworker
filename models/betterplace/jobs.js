let createJob = function(mysql, data, funcCallback){
    // we can have some validation on customerData
    let query = "INSERT into jobs set ?";
    mysql.query(query,[data], function(err, result){
        if(err){
            console.err("Error: ", err);
            funcCallback(new Error(err.message));
        }else{
            funcCallback(null, result);
        }
    });
};

let getJobBySkills = function(mysql, skill,  callback){
    let query = `select * 
                from jobs as j
                where status = 'ACTIVE' order by posted_on order by desc`;

    mysql.query(query, id, function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, err);
        }
    });
};



let getJobById = function(mysql, id, callback){
    let query = `select * 
                from jobs as j
                where status = 'ACTIVE' where id = ?`;

    mysql.query(query, [id], function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    });
};




module.exports= {
    createJob, 
    getJobBySkills,
    getJobById
}