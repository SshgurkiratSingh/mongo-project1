const express = require('express')
const Post=require('./models/Post')
const router = express.Router();

  
router.get('/home',(req,res)=>{
    router.use(express.static('public'));
    res.sendFile(__dirname+"/public/index.html");
    res.sendFile(__dirname+"/public/index.css");
})
router.post('/admi',(req,res)=>{
   console.log(req.body)
})
module.exports=router;