const express=require('express')
const app=express()

 const port=8000
const mongoose=require('mongoose')
require("dotenv").config();
const User=require('./model/userSchema')
app.use(express.json())

require("./config/database");
require('bcrypt')



// const middleware=(req,res,next)=>{
//     console.log('Time:', Date.now());
//     next();
// }
const mainroute=(require('./routes/auth'))
app.use(mainroute)


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})