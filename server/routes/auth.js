const express = require('express')
const User = require('../model/userSchema')
const router = express.Router()
require('../config/database')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')


router.get('/', (req, res) => {
    res.send("hi")
})
router.get('/about', (req, res) => {
    res.send("hi")
})

router.get('/connect', (req, res) => {
    res.send("hi")
})


// login
router.post('/login',async(req,res)=>{
    // console.log(res.body)
    
   try {
    let token
    const { email , password}=req.body

    if(!email || !password){
        return res.status(404).json({message:"Something left"})
    }
    const login= await User.findOne({email:email});
    if(login){
        const loginpass=await bcrypt.compare(password,login.password)


        if( loginpass){
            token= await login.generateAuthToken();
         console.log(token)

         res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
         });

        res.status(200).json({message:"sign in successfull"})
        }else{
            res.status(404).json({error:"User not exist"})
        }

    }else{
        res.status(404).json({error:"Something broken"})

    }


   } catch (error) {

   }
})



//register
//with promises(not recomended)
// router.post('/register',(req,res)=>{
//     console.log(req.body)
//     User.findOne({email:req.body.email})
//     .then((UserExist)=>{
//         if(UserExist){
//             return res.status(404).json({error:"Already exist"})
//         }


//         const user=new User(req.body)
//         user.save().then(()=>{
//             res.status(201).json({message:"Successfull"})
//         }).catch((err)=>{
//             res.status(500).json({message:"Something Broken!!"})
//         })
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

router.post('/register', async (req, res) => {
    try {
        const UserExist = await User.findOne({ email: req.body.email })

        if (UserExist) {
            return res.status(404).json({ error: "Already exist" })
        }
        const user = new User(req.body)


        const userRegister = await user.save();
        if (userRegister) {
            
            res.status(201).json({ message: "Successfull" })
        }


    } catch (error) {
        res.status(404).json({ message: "Something Broken!!" })
    }

})

//login

// router.post('/login', async (req, res) => {

//         const UserExist = await User.findOne({ email: req.body.email})
//         console.log(req.body)

//         let token
//         const { email, password } = req.body
//         res.status(404).json({message:"Hello"})
//         // if (!email || !password) {
//         //     return res.status(404).json({ message: "Something left" })
//         // }
//         // // const login = await User.findOne({ email: email });


//         // if (UserExist) {

//         //     const loginpass = await bcrypt.compare(password, req.body.password)


//         //     if (loginpass) {
//         //         token = await login.generateAuthToken();
//         //         console.log(token)

//         //         res.cookie("jwtoken", token, {
//         //             expires: new Date(Date.now() + 25892000000),
//         //             httpOnly: true
//         //         });
//         //         // return res.status(404).json({ error: "Already exist" })
//         //     }
//         //     const user = new User(req.body)


//         //     const userRegister = await user.save();
//         //     if (userRegister) {
//         //         console.log(userRegister)
//         //         res.status(201).json({ message: "Successfull" })
//         //     }


//         // }
    
     
//     })

module.exports = router