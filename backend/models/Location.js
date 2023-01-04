const mongoose=require('mongoose')
const LocationSchema = new mongoose.Schema({
   car_id: { type: mongoose.Types.ObjectId, ref: "Car" },
    price:{type:Number, require:true},
    date_retour:{type:Date,require:true},
    date_depart:{type:Date,require:true},
    debut_reel:{type:Date,require:true},
    depart_reel:{type:Date,require:true},
    adress:{type:String,require:true},              
    Firstname:{type:String,require:true},     
    Lastname:{type:String,require:true}, 
    num_permis:{type:String,require:true}, 
    caution:{type:String,require:true}, 
    num_tel:{type:String,require:true},    
    pri_total:{type:String,require:true}, 
 
 



},{timestamps:true})
module.exports= mongoose.model('Location', LocationSchema)
