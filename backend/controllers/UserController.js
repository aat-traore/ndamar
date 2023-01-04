const  User = require('../models/User')
const jwt= require('jsonwebtoken')
const bcrypt = require("bcrypt");
const roles  = require('../middlewares/role');

 
async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
 }
  
 async function validatePassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
 }
  
 module.exports.signup = async (req, res, next) => {
  try {
   const { FirstName,LastName, email, password, role } = req.body
   const hashedPassword = await hashPassword(password);
   const newUser = new User({ FirstName,LastName,email, password: hashedPassword, role: role || "client" });
   const accessToken = jwt.sign({ userId: newUser._id }, process.env.SECRET, {
    expiresIn: "7d"
   });
   newUser.accessToken = accessToken;
   await newUser.save();
   res.json({
    data: newUser,
    accessToken
   })
  } catch (error) {
   next(error)
  }
 }
 module.exports.getUsers = async (req, res,) => {
  const users = await User.find({});
  res.status(200).json({
   data: users
  });
 }
 module.exports.getUser = async (req, res) => {
  try {
   const userId = req.params.userId;
   const user = await User.findById(userId);
   if (!user) return ('User does not exist');
    res.status(200).json({
    data: user
   });
  } catch (error) {
   next(error)
  }
 }
 module.exports.updateUser = async (req, res, next) => {
  try {
   const update = req.body
   const userId = req.params.userId;
   await User.findByIdAndUpdate(userId, update);
   const user = await User.findById(userId)
   res.status(200).json({
    data: user,
    message: 'User has been updated'
   });
  } catch (error) {
   next(error)
  }
 }

 module.exports.removeUser = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    await User.findByIdAndDelete(userId);
    res.status(200).json({
     data: null,
     message: 'User has been deleted'
    });
   } catch (error) {
    next(error)
   }
}
 
exports.grantAccess = function(action, resource) {
 return async (req, res, next) => {
  try {
   const permission = roles.can(req.user.role)[action](resource);
   if (!permission.granted) {
    return res.status(401).json({
     error: "You don't have enough permission to perform this action"
    });
   }
   next()
  } catch (error) {
   next(error)
  }
 }
}
 
exports.allowIfLoggedin = async (req, res, next) => {
 try {
  const user = res.locals.loggedInUser;
  if (!user )
   return res.status(401).json({
    error: "You need to be logged in to access this route"
   });
   next();
  } catch (error) {
   next(error);
  }
}
