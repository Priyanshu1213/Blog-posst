const mongoose= require("mongoose")

const signupSchema= mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true,
        unique:true,
        
    },
    password:{
        type:String,
        required:true,
    }
})

const signupmodal= mongoose.model( "signup",signupSchema)
//  signupmodal.createIndexes()
module.exports=signupmodal;