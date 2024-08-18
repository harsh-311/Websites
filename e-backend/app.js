const express = require('express');
const mongoose =require('mongoose')
const cors=require('cors');
const { body, validationResult } = require('express-validator');
const app=express();
app.use(cors())
app.use(express.json())

require('./db/database.js')
const clothes_user = require('./model/model.js');

app.post('/userdetails',[
    body('name', 'name is required').isLength({min: 3}),
   
    body('number').isLength(10).withMessage('number length is 10 integer.'),
    body('email', 'email must be a valid email format').not().isEmpty().isEmail(),
    body('password', 'password must be a 5 charctors').isLength({min:5})
],async(req,res)=>{
    const {name,email,password,number} = req.body
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return  res.send({ errors: result.array() });
  
    }
    try {
        if (!name || !email || !password || !number) {
          return res
          .status(422)
          .json({ message: "Please filled all the required fields..." });
        }
        
         const data=await clothes_user.insertMany(req.body)
         res.json({message:'data send successfully'})
    }
    catch(err){
        res.send(err);
    }
})

app.post('/login',[body('email', 'email must be a valid email format').not().isEmpty().isEmail(),],async (req, res) => {
    const {email,password}=req.body
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return  res.send({ errors: result.array() });
  
    }
    try{
        const data=await clothes_user.findOne({email})
        if(!data){
            return res.json({ message:'This is user Does not exist...'})
        }
        // console.log(password,data.password)
        if(password!=data.password){
            return res.json({ message:'Password is incorrect'})
        }
        res.json({message:'User Login Successfully'})
    }
    catch(error){
        res.send(error)
    }
})

app.post('/getdata',async(req,res)=>{
    const {email}=req.body;
    const userdata=await clothes_user.find({email:email})
    res.json(userdata)
})
app.patch('/update',async(req,res)=>{
    const user=await clothes_user.findOneAndUpdate({email:req.body.email},{$set:req.body})
    
    res.json({message:"Hello"})
})

app.listen(5000,()=>{
    console.log('listening on port 5000')
})