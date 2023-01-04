const mongoose= require('mongoose')
const VenteSchema = new mongoose.Schema({
    car_id: { type: mongoose.Types.ObjectId, ref: "Car" },
    user_id:{type:mongoose.Types.ObjectId, ref:"user"},
    price:{type:Number, require:true},
    societe:{type:Date,require:true},
    paiement:{type:String,require:true}, 
  
  
 
 
 
 },{timestamps:true})
 module.exports= mongoose.model('vente', VenteSchema)