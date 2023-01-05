const express=require('express');
const post = require('./post');
const bodyParser=require('body-parser')
const app=express();
const mongoose=require('mongoose');
require('dotenv/config');
const postRoute=require('./post');
// app.use(".025")
app.use('/',postRoute);
app.use(bodyParser.json());

// 
mongoose.connect(process.env.DB_CONNECTION,()=>console.log('connected to db'))



app.use((req,res)=>{res.status(404).json({
    "reply":"not-found",
    "error":404
});})

app.listen(3000);
