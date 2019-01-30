const router = require("express").Router();
const User = require("../models/User");
const secrect = require("../util/db-config")
const jwt = require("jsonwebtoken");
const userMapper = require('../mapper/user');

router.post("/register", (req, res, next) => {
    var user = new User(req.body);
 
    User.findOne({ userName: req.body.userName }, function (err, existingUser) {
        if (existingUser) {
            res.status(400).json({ message: "user name already exists" });
        }
        else if (!req.body.password || req.body.password.length <= 4) {
            res.status(400).json({ message: "Password must be greater than 4 characters" });
        }
        else {
            user.save((err,savedUser) => {
                let mapSavedUser = new userMapper(savedUser);
                let token = jwt.sign({
                    user: mapSavedUser,
                }, secrect.config.secrectKey, { expiresIn: "7d" })

                res.json({
                    success: true,
                    token: token
                })
            });

        }
    })

})

router.post("/login",(req,res,next)=>{
    User.findOne({userName:req.body.userName},(err,foundUser)=>{
        if(!foundUser){
            res.status(400).json({success:false,message:"User doesn't exist"});
        }else{
            if(!(foundUser.comparePassword(req.body.password))){
                res.status(401).json({message:"Password is invalid"});
            }else{
                let userForResponse = new userMapper(foundUser);
                let token = jwt.sign({
                    user:userForResponse
                },secrect.config.secrectKey,{expiresIn:"2d"});

                res.status(200).json({
                    success:true,
                    token:token
                })
            }
        }
    })
})

router.put("/reset-password",(req,res,next)=>{
    const userName = req.body.userName;
    User.findOne({userName: userName},(err,foundUser)=>{
        if(err) return next(err);
         if(!foundUser){
             res.status(404).json({success:false,message:"User not found"})
         }else{
            foundUser.password = req.body.newPassword;
            foundUser.save((err,savedUser)=>{
                res.status(202).json({success:true,message:"Password updated successfully"});

            });
         }
    })
})
module.exports = router;