const router = require('express').Router()
const  sales =  require('../controllers/venteController')
router.post('/new_sale', sales.new_sale)
router.get ('/all_sales', sales.getAll)
router.get('/One_sale/:id_sale',sales.getOne)
router.put('/modify/:id', sales.update_sale)
router.delete('/remove_sale/:_id', sales.remove_sale)

module.exports= router