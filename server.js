var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var expressValidator = require('express-validator');
var testrouter = require("./routers/test");
let aspirantRouter = require("./routers/goodworker/aspirant");
let recruiterRouter = require("./routers/goodworker/recruiter");
let jobRouter = require("./routers/goodworker/job");
let applicatonRouter = require("./routers/goodworker/application");

let readyassistMiddlware = require("./middleware/middleware");


var config = require("./configs/config");
//making app ready to work with minimal features.
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
app.set("port", process.env.PORT||4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(expressValidator());


// skip token validation for some the apis
app.use(function(req, res, next){
    if(req.url.indexOf("/api/aspirant")> -1){
        next();
    }else if(req.url.indexOf("/api/recruiter")> -1){
        next();
    }else{
        readyassistMiddlware.validateToken(req, res,next);
    }
});


app.use("/api/test", testrouter);


//readyassist
app.use("/api/aspirant",aspirantRouter );
app.use("/api/recruiter",recruiterRouter );
app.use("/api/job", jobRouter);
app.use("/api/aplication", applicatonRouter);



app.listen(app.get("port"), function(err){
    if(err){
        console.log("Application failed to start--> ", err);
    }else{
        console.log("Server is listining on PORT: ", app.get("port"));
    }
})
