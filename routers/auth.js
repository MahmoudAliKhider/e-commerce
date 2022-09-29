const router = require('express').Router()

const UserModels = require('../models/users');
const bcrypt = require('bcrypt')


router.post('/register', async (req,res)=>{
    try{
      const salt = await bcrypt.genSalt(10);
      const hashpass = await bcrypt.hash(req.body.password,salt);
        const newUser= new UserModels({
          username:req.body.username,
          email:req.body.email,
          password: hashpass,
        });
        const user = await newUser.save();
        console.log(user)
        res.status(200).json(user)

    }catch(err){
    res.status(401).json(err)
    console.log(err)
    }
})

module.exports=router