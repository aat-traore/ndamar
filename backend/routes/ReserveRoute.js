const router = require('express').Router()
const  reservation =  require('../controllers/reservation')
router.post('/new_reserve', reservation.new_reserve)
router.get ('/allReserves', reservation.getAll)
router.get('/One_reservation/:id_reserve',reservation.getOne)
router.put('/modification/:id', reservation.update_reserve)
router.delete('/remove_res/:_id', reservation.remove_reservation)

module.exports= router