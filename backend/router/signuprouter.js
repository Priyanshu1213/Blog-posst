const express =require("express")
const router = express.Router()
const bodyParser= require("body-parser")
const {body, validationResult}= require("express-validator")
const bodyparser=bodyParser.json();
const signup=require("../schema/signup")
router.post("/signup",bodyparser,

[
body('username').isLength({min:5}),
body('emailid').isEmail(),
body('password').isLength({min:5})


],
   async (req,res)=>{
  

   const error= validationResult(req);
   console.log(req.body);
   console.log(error);


   if(!error.isEmpty()){

    return res.status(422).json(error.array());
   }

await signup.create({
    username:req.body.username,
    emailid:req.body.emailid,
    password:req.body.password
}).then(signup=>res.json(signup))

// await signup.create({
//     username:"anooppapa",
//     emailid:"papa@gmail.com",
//     password:"3h23j2d"
// }).then(signup=>res.json(signup))





            
            // res.send(req.body)
}

)

// router.post("/signup",bodyparser,async(req,res)=>{
//     try {
//         const  route= await signup.create({
//             username:req.body.username,
//             emailid:req.body.emailid,
//             password:req.body.password
//         })
//         res.json(route)
        
//     } catch (error) {
//         console.log(error)
//     }
// })





module.exports=router
