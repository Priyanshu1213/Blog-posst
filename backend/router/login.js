const express =require("express")
const router = express.Router()
const bodyParser= require("body-parser")
const {body, validationResult}= require("express-validator")
const bodyparser=bodyParser.json();
const signup=require("../schema/signup")
const posttemp=require("../schema/post")

router.get("/login",bodyparser,
   async (req,res)=>{
  
 const logindata1= await signup.find({});

 
 return res.json({logindata1})



            
            // res.send(req.body)
}

)




router.get("/temppost",bodyparser,
   async (req,res)=>{
  
 const logindata12= await posttemp.findById("Anoop12@gmail.com");

 console.log(logindata12)
 return res.json({logindata12})



            
            // res.send(req.body)
}

)







module.exports=router
