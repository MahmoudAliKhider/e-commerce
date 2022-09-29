const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title:{type:String , required:true, unique:true},
        desc:{type:String , required:true, unique:true},
        img:{type:String , required:true},
        categories:{type:String},
        size:{type:String},
        color:{type:String},
        price:{type:String,required:true}
        
    },
    {timeseries:true}
)
module.exports = mongoose.model("Products",productSchema)