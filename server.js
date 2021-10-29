"use strict";
const express = require('express');
const app = express();
const Port = process.env.Port || 3000;
const path = require('path');
const mongoose =require('mongoose');
const BlogPost = require('./model/BlogPost');
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.set('view engine','ejs')

  app.get('/',async (req,res)=>{
    const blogPosts =await BlogPost.find({});

 res.render('index' ,{
  blogPosts
 } );
  })
  app.get('/about',(req,res)=>{
    res.render('about')
  })

  app.get('/contact',(req,res)=>{
    res.render('contact')
  })

app.get('/post/edit',(req,res)=>{
  res.render('create');
})
app.get('/post/:id',async(req,res)=>{
  console.log(req.url);
  console.log(req.headers)
  const blogPost =  await BlogPost.findById(req.params.id);
  res.render('post',{
    blogPost
  })
})
app.post('/post/store',async (req,res)=>{
  await BlogPost.create(req.body, 
    res.redirect('/')
    )
  })

app.use((req,res ,next)=>{
  res.render('404');
 return next();
})


app.listen(Port,()=>console.log("server lisent port : "+ `${Port}`))