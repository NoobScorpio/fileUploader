const express=require('express');
const bodyParser = require("body-parser");
const app=express();
const DB=require('./db');
const users=require('./routes/users');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/users',users);
app.listen(3000, ()=>{
    console.log("The server is running");
});