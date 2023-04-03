const express=require("express");
const {User}=require("../modal/usermodel");
const bcrypt = require('bcrypt');

const usersRoute=express.Router();

usersRoute.post("/signup",async(req,res)=>{

    const {email,password}=req.body; 
    console.log(email,password)   
   try{
        
   let exist=await User.findOne({email:email});

   if(exist){
    res.send({msg:"user already registered please signin"});
   }
   else{

    bcrypt.hash(password, 5, async function(err, hash) {
        
        if(err){
            res.send(err);
        }

        else{

            const user=new User({email,password:hash,login_attempts:0,lock:null});

            await user.save();
            res.send({msg:"user registered successfully"});
        }
    });

   }

   }
   catch(err){
    console.log(err);
   }
})
usersRoute.post("/login",async(req,res)=>{

    const {email,password}=req.body;

    try{
        const user=await User.find({email:email});
        
        if(user.length>0){
            bcrypt.compare(password, user[0].password, function(err,result) {
                if(result){
                    res.send({msg:"Login Successful",email:user[0].email})
                }
                else{
                    res.send({msg:"Login Failed, plz enter correct credintials"})
                }
            });
        }
    }
    catch(err){
        res.send(err);
    }
})



module.exports={usersRoute};