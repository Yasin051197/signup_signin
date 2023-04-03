const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    login_attempts:Number
})

const User=mongoose.model("user",userSchema)
module.exports={User};