const Sequelize = require('sequelize');
let connection=new Sequelize('fileDB','root','',{
    host:'localhost',
    dialect:'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
});
module.exports=connection;