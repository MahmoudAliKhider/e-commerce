const router = require("express").Router();
const ordersModul = require("../models/orders")

//Add Cart
router.post('/add',async(req,res)=>{
  const newCart = new ordersModul(req.body);

  try {
    const saveOrder = await newCart.save();
    res.status(200).json(saveOrder)
  } catch (err) {
    res.status(500).json(err)
    
  }
})

module.exports=router