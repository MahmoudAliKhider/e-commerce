const router = require("express").Router();
const bcrypt =  require("bcrypt")
const productModule = require("../models/products")

router.post("/create/new",async(req,res)=>{
    const newProducts =  new productModule(req.body)

    try {
        const saveProduct = await newProducts.save();
        res.status(201).json(saveProduct)
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports=router