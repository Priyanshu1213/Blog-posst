const mongoose= require("mongoose")

const signupSchema8= mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        required:true,
    
        
    },
    password:{
        type:String,
        required:true,
    }
    ,
    title:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})

const postmodal= mongoose.model( "newpost",signupSchema8)
//  signupmodal.createIndexes()
module.exports=postmodal