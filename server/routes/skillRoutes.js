const router = require('express').Router()
const { createSkill, all } = require('../controllers/skillController')
const authenticate = require('../passport/authenticateMiddleware')

router.post('/create', createSkill)
router.get('/all', authenticate, all)

module.exports = router