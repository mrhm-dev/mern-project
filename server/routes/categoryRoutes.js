const router = require('express').Router()
const { createCategory, all } = require('../controllers/categoryController')

router.post('/create', createCategory)
router.get('/all', all)

module.exports = router