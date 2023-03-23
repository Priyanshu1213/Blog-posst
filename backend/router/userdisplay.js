const express =require("express")
const router = express.Router()
const bodyParser= require("body-parser")
const {body, validationResult}= require("express-validator")
const bodyparser=bodyParser.json();
const post=require("../schema/post")
router.get("/titledisplay",bodyparser,
   async (req,res)=>{
  
 const display= await post.find({});
    
 return res.json({display})



            
            // res.send(req.body)
}

)







module.exports=router