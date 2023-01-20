const express = require('express');
const { ConnectionStates } = require('mongoose');
const Post=require('./models/Post')
const router = express.Router();

  
router.get('/home',(req,res)=>{
    router.use(express.static('public'));
    res.sendFile(__dirname+"/public/index.html");
    res.sendFile(__dirname+"/public/index.css");
})
router.post('/admi',(req,res)=>{
   //console.log(req.body)
   const post = new Post({
    title: req.body.title,
    description: req.body.description
   })
   post.save().then(data => {
    res.json(data);
    console.log(data);
   }).catch(err =>{
    console.log(err);
    
    res.status(200)
   });
})
module.exports=router;