const  router= require('express').Router()
const carcar= require('../controllers/CarCon')
 
router.post('/Car', carcar.new_Car)
router.get('/getAll', carcar.allCar)
router.get('/getOne/:carId', carcar.OneCar)
router.put('/update_car/:id', carcar.update)
router.delete('/delete_car/:carId', carcar.removeCar)
 
 
 module.exports = router;