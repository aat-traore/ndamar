const mongoose= require ("mongoose");
const jwt = require("jsonwebtoken");

 const userSchema=  new mongoose.Schema({
    Username:{ type :String, require:true},
    FirstName:{ type :String, require:true},
    LastName:{type:String,require:true},
    Number:{ type : String, require:true},
    email: {type:String, require: true},
    password: {type:String, require: true},
    Idenfiant:{type: Number, require:true},
    Address:{type:String, require:true},
    etat:{type:Boolean},
    role: {type:String ,
      default:'client',
      enum:[ 'admin', 'client', 'gerant']}, 
    accessToken:{type:String, require:true},
     cars:[{type: mongoose.Schema.Types.ObjectId, ref:"car"}]
        
      
  
}, 
 {timesTamps:true});
 /*userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({ _id:this._id} , process.env.SECRET, {
      expiresIn:"7d",
    });
     return token;
 }

 
 const validate = (data) => {
	const schema = Joi.object({
		FirstName: Joi.string().required().label("FirstName"),
		LastName: Joi.string().required().label("LastName"),
		email: Joi.string().email().required().label("email"),
		password: passwordComplexity().required().label("password"),
	});
	return schema.validate(data);
};*/
const User = mongoose.model('user',userSchema)
 module.exports= User;