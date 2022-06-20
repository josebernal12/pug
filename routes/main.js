const { Router } = require('express')
const router = Router()
const { getProducto, postProducto} = require('../controllers/controllers')



router.get('/producto', getProducto)
router.post('/producto', postProducto)

module.exports = router

