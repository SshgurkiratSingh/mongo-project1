const express=require('express');
const post = require('./post');
const bodyParser=require('body-parser');
const app=express();
const mongoose=require('mongoose');
require('dotenv/config');
const postRoute=require('./post');
app.use(express.json());
// app.use(".025")
app.use('/',postRoute);
app.use(bodyParser.json());
mongoose.set('strictQuery', true);

// 
mongoose.connect(process.env.DB_CONNECTION,()=>console.log('connected to db'))
app.post('/nnn',(req,res)=>{
    console.log(req)
 });
require('./models/Post.js');
app.use((req,res)=>{res.status(404).json({
    "reply":"not-found",
    "error":404
});})

app.listen(3000);
