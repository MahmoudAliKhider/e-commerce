const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
      const connect = await mongoose.connect("mongodb://0.0.0.0:27017/EcomApi",{
        //   useNewUrParser:true
        useNewUrlParser:true
        }).connection
        console.log("Connected to DataBase")
    }catch(error){
     console.error(error);
    }
}

module.exports=connectDB