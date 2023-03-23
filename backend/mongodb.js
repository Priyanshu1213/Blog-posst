const mongoose = require('mongoose');
const url = "mongodb+srv://priyanshuyadav39976:priyanshu@cluster0.35goksp.mongodb.net/bloging"


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(url);
  console.log("mongo")
}
module.exports=mongoose;