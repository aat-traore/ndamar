
const router = require('express').Router()
const controller = require("../controllers/UserController");
const authen= require('../controllers/authJwt')
const at= require('../middlewares/authJwt')

router.post('/new_user',controller.signup);
router.post('/login' , authen.auth);
router.get('/Users', controller.getUsers)
router.put('/update/:userId', controller.updateUser)
router.delete('/delete/:userId' , controller.removeUser)


module.exports = router

