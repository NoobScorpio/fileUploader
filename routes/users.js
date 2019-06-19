const express=require('express');
const router=express.Router();
const sequelize=require('sequelize');
const multer=require('multer');

const storage=multer.diskStorage( {
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,(Math.floor(Math.random() * Math.floor(10000)))+ file.originalname);
    }
});
const upload=multer({storage:storage});
const User=require('../models/user.js');

router.get('/',async (req,res)=>{
    const users= await User.findAll();
    if(!users) return res.status(400).send("There is a problem");
    res.status(200).send(users);
});
let type=upload.single('file');
router.post('/',type,async (req,res)=>{
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
      }
    console.log('Files is : '+ req.file.path);
    const user =  await User.create({
        name: req.body.name,
        email: req.body.email,
        userImg:req.file.path
    });
    res.status(200).send(user);
});
module.exports=router;