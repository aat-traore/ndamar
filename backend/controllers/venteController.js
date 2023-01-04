const  sales = require('../models/Vente')
const CarModel = require('../models/Car')
const UserModel = require('../models/User')
module.exports.new_sale= async(req, res, next)=>{
  const { user_id,car_id, price,paiement}=req.body;
    
    try {
        const user = await UserModel.findById(user_id)
        if(!user){
            return res.status(404).json({message: 'user does not found'})
        }
        const car = await CarModel.findById(car_id)
        if(car.solde ==true){
            return res.status(200).json({message : 'cette voiture est déja  vendue'})
        }
        car.solde== true;
        car.save()
        const newSale = new sales({car_id, price, user_id,paiement});
         await newSale.save()
            return res.status(201).json({
            data: newSale
        })
    } catch (error) {
        res.status(500).json(`message: ${error}`)
        
    }
}
module.exports.getAll = async(req,res,next)=>{
    try {
    const reserves = await sales.find()
     res.status(200).json({
        reserves
    })
    } catch(error){
        res.status(500).json(`message:${error}`)
        next()
}
 }
  module.exports.getOne=async(req,res, next)=>{
    try {
    const id_reserve = req.params.id_reserve
    const one_reserve= await sales.findById(id_reserve).populate('car_id')
    res.status(200).json({
        one_reserve
    })
        
    } catch (error) {
        res.status(404).json(`message:${error}`)
        next()
    }
  }
module.exports.update_sale= async(req,res,next)=>{
    try {
    const move = await sales.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    } , 
    { new: true})
    res.send(move) 
    } catch (error) {
        res.status(500).json(`message:${error}`)
        next() 
        }
}; 
 module.exports.remove_sale = async(req,res,next)=>{
    try {
        const movie = await sales.findByIdAndDelete({_id:req.params._id});
       return res.status(200).json(movie);
    } catch (error) {
         next(error)
    }
 }