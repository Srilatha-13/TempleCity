const router = require('express').Router()
const { PostQuote }= require('../controllers/quote.controller')



router.post('/postquote' , PostQuote)



module.exports=router