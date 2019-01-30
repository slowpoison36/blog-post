const secrect = require("../util/db-config")
const jwt = require("jsonwebtoken");

module.exports = function(req,res,next){
    let token = req.headers["authorization"];
    if(token){
        jwt.verify(token,secrect.config.secrectKey,(err,decoded)=>{
            if(err){
                res.status(401).json({
                    success:false,
                    message:"Failed to authenticate token"
                })
            }else {
                req.decoded = decoded;
                 next();
            }
        })

       
    }else{
        res.status(403).json({success:false,message:"No token provided"})
    }
}

