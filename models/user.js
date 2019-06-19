const Sequelize = require("sequelize");
const connection = require("../db");
const user = connection.define('users',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
        },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    userImg:{
        type:Sequelize.STRING,
    
    }
});
user.sync();
module.exports=user;