var express = require("express");
var router = express.Router();
var aspirantService = require("../../services/goodworker/aspirantService");
const async = require("async");
const asirantValidator = require("../validators/aspirantValidator")
// var test2 = require("../controllers/test2");


router.post("/register",asirantValidator.validateBody, function(req,res){
        async.waterfall([
            function(callback){
                let data = req.body;
                aspirantService.registerAspirant(data, function(err, result){
                    if(err){
                        callback(err);
                    }else{
                        callback(err, result);
                    }
                })
            }
        ], function(err, result){
            if(err){
                res.status(400).json({msg: err.message});
            }else{
                res.status(200).json({
                    msg: "success"
                })
            }
        })
});
router.post("/sendotp", function(req, res){
    aspirantService.sendOTP(reasirantValidator.validateBody, q.body.mobile, function(err, response){
        if(err){
            res.status(500).json({msg: "Something went wrong"});
        }else{
            res.status(200).json({msg: "OTP has been sent"});
        }
    })
});
router.post("/validateotp", asirantValidator.validateOTP, function(req, res){
    let reqObj = req.body;
    aspirantService.validateOTPForCustomer(reqObj, function(err, response){
        if(err){
            res.status(500).json({msg: "Something went wrong"});
        }else{
            res.status(200).json(response);
        }
    })
})
router.get("/:name", function(req, res){
    res.send("Hi "+ req.params.name);
});
router.post("/", function(req,res){
    let body = req.body;
    res.send(body);
});

module.exports = router;