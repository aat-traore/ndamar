const mongoose= require('mongoose')
mongoose.Promise= global.Promise;
const Db={}
Db.mongoose=mongoose;
Db.User=require('./User.model')
Db.role= require('./Role.model')
Db.ROLES= ['admin', 'user', 'client']
module.exports= Db;
