const mongoose=require('mongoose')
const { role } = require('.')
const RoleCon = require('../controllers/RoleCon')
const AuthSchema= new mongoose.Schema({
    Username:{},
    email:{type:String, require:true},
    password:{type:String, require:true},
}, {timestamps:true})
module.exports= mongoose.model('Auth', AuthSchema)