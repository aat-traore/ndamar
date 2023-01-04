const mongoose = require('mongoose')
const CarSchema= new mongoose.Schema({
    NameCar:{ type:String,require:true },
    image:{type:String, require:true},
    year:{type: Date, require:true},
    consommation:{type:String, require:true},
    place:{type:Number, require:true},
    Kilometrage:{type:String, require:true},
    couleur:{type:String, require:true},
    solde:{type:Boolean, default:false},
    etat:{type:Boolean ,require:true},
    marque:{type: Array, require:true},
    type:{type:Array, require:true},
    option:{type:Array, require:true},
    isReserve:{type:Boolean,default:false},


    author:{ type: mongoose.Types.ObjectId, ref:"user" }



}, {timestamps:true})
module.exports = mongoose.model('Car',CarSchema)