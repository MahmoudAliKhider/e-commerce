const express = require('express');
const app = express();
const mongoose = require('mongoose')
const DataBase = require('./Database/db')
require('dotenv').config()
DataBase()

const port = 3000
app.listen((port),()=>{
    console.log(`server connected to http://localhost${port}`)
})