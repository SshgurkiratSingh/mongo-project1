const express = require('express')
const Post=require('./models/Post')
const router = express.Router();
router.get('/home',(req,res)=>{
    res.send("hiii");
})
router.post('/admi',(req,res)=>{
   console.log(req.body)
})
module.exports=router;