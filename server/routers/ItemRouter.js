const { Router } = require('express')
const ItemController = require('../controllers/ItemController.js')

const router = new Router()

router.post('/', ItemController.create)
router.get('/', ItemController.getAll)
router.get('/id/:id', ItemController.getOne)
router.get('/category/:category', ItemController.getByCategory)

module.exports = router
