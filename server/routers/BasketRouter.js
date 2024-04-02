const { Router } = require('express')
const BasketController = require('../controllers/BasketController.js')

const router = new Router()

router.post('/', BasketController.create)
router.post('/:id', BasketController.addItemToBasket)
router.get('/:id', BasketController.getBasket)
router.put('/increase/:id/:itemId', BasketController.increaseCount)
router.put('/decrease/:id/:itemId', BasketController.decreaseCount)
router.delete('/:id/:itemId', BasketController.deleteOne)
router.delete('/:id', BasketController.Clear)

module.exports = router
