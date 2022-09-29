const express = require('express')
const router = express.Router();
const UserModels = require('../models/users');
const bcrept = require('bcrypt')
router.post('/register',async(req,res)=>{
    try{
      const salt = await bcrept.genSalt(10);
      const hashpass = await bcrept.hash(req.body.password,salt);
        const newUser= new UserModels({
          username:req.body.username,
          email:req.body.email,
          password:req.body.password
        })
        const user = await newUser.save();
        res.status(200).send(user)

    }catch(err){
    res.status(401).json(err)
    }
})

module.exports=router