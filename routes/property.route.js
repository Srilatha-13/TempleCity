const router = require('express').Router()
const { PostProperty , GetProperty }= require('../controllers/property.controller')



router.post('/postproperty' , PostProperty)
router.get('/getproperty' , GetProperty)


module.exports=router