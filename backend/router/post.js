const express =require("express")
const router = express.Router()
const bodyParser= require("body-parser")
const {body, validationResult}= require("express-validator")
const bodyparser=bodyParser.json();
const post=require("../schema/post")
router.post("/post",bodyparser,

[
body('username').isLength({min:5}),
body('emailid').isEmail(),
body('password').isLength({min:5}),
body('title').isLength({min:3}),
body('comment').isLength({min:10})


],
   async (req,res)=>{
  

   const error= validationResult(req);
   console.log(req.body);
   console.log(error);


   if(!error.isEmpty()){

    return res.status(422).json(error.array());
   }

await post.create({
    username:req.body.username,
    emailid:req.body.emailid,
    password:req.body.password,
    title:req.body.title,
    comment:req.body.comment

}).then(post=>res.json(post))


}

)







module.exports=router
