const Car = require('../models/Car')

module.exports.new_Car = async(req, res, next)=>{
    const {NameCar, couleur, marque, place, author} = req.body
    try {
     const car =  new Car({NameCar, couleur, marque, place,author})
      await car.save()
       res.status(201).json({data:car})
    } catch (error) {
        res.status(500).send(`message: ${error}`)
    }
};
 module.exports.allCar = async(req,res,next)=>{
    try {
    const cars = await Car.find().populate('author')
     res.status(200).json({
        cars
    })
    } catch(error){
        res.status(500).json(`message:${error}`)
        next()
}
 }
 module.exports.OneCar = async(req,res,next)=>{
     try {
        const carId = req.params.carId
        const car = await Car.findById(carId).populate('author')
         res.status(200).json({
            car
        })
     } catch (error) {
        res.status(404).json(`message:${error}`)
         next()
     }
      
 }
  module.exports.update = async(req,res,next)=>{
     try {
        const  car = await Car.findByIdAndUpdate(
            req.params.id,
             req.body, 
             { new: true})
              res.send(car)
     } catch (error) {
         res.status(500).json(`message:${error}`)
     }

  };
  module.exports.removeCar = async (req, res, next) => {
    try {
     const carId = req.params.carId;
     await Car.findByIdAndDelete(carId);
     res.status(200).json({
      data: null,
      message: 'Car has been deleted'
     });
    } catch (error) {
     next(error)
    }
  }
   