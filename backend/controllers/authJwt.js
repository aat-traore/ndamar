const  User  = require("../models/User");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require('jsonwebtoken')
async function validatePassword (plainPassword,hashedPassword){
  return await bcrypt.compare(plainPassword, hashedPassword)
 }

module.exports.auth = async (req ,res) => {
  try {
    const {email, password} = req.body;
    const  user = await User.findOne({ email
    })
    if(!user){
      return ('email does not exist')
    }
    const validPassword = await  validatePassword(password, user.password)
    if (!validPassword){
     return(' password is not correct') 
    }
    const accessToken= jwt.sign({userId: user._id},
      process.env.SECRET,
      {expiresIn: "7d", })
      await User.findByIdAndUpdate( user._id,{accessToken})
      res.status(201).json({
        data:{ email: user.email, role:user.role}, 
        accessToken
      })

  } catch (error) {
    res.status(500).json(`message ${error}`)
  }
}
	




