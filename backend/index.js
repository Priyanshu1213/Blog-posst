const express = require('express')
const mongodb= require("./mongodb")
const app = express()
const port = 5000



app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept");
    next();
  })
app.get('/', (req, res) => {
  res.send('Hello World!')
})
const signup = require("./router/signuprouter")
const login = require("./router/login")
const post = require("./router/post")
const titledisplay= require("./router/userdisplay")
const login1 = require("./router/login1")
app.use("/api",signup)
app.use("/api",post)
app.use("/api",login1)


app.use("/api",login)
app.use("/api",titledisplay)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})