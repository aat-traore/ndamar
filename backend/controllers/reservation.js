const  reserve = require('../models/Location')
const CarModel = require('../models/Car')
 
module.exports.new_reserve= async(req, res, next)=>{
  
    const { car_id, price, Firstname, Lastname, caution,num_permis}=req.body;
    
    try {
        console.log(req.body)
        const car = await CarModel.findById(car_id)
        if(car.isReserve==true){
            console.log("--------------",car)
            return res.status(200).json({message : 'cette voiture est déja reservé'})
        }
        car.isReverse = true;
        car.save()
     const newReservation =  new reserve({car_id, price, Firstname,Lastname, caution, num_permis,})
     newReservation.save()
        return res.status(201).json({
            data: newReservation
        })
    } catch (error) {
        res.status(500).json(`message: ${error}`)
        
    }
}
module.exports.getAll = async(req,res,next)=>{
    try {
    const reserves = await reserve.find()
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
    const one_reserve= await reserve.findById(id_reserve).populate('car_id')
    res.status(200).json({
        one_reserve
    })
        
    } catch (error) {
        res.status(404).json(`message:${error}`)
        next()
    }
  }
module.exports.update_reserve= async(req,res,next)=>{
    try {
    const move = await reserve.findByIdAndUpdate(
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
 module.exports.remove_reservation = async(req,res,next)=>{
    try {
        const movie = await reserve.findByIdAndDelete({_id:req.params._id});
       return res.status(200).json(movie);
    } catch (error) {
         next(error)
    }
 }

