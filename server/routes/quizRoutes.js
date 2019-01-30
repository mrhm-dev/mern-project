const router = require('express').Router()
const {createQuiz} = require('../controllers/quizController')

router.post('/create', createQuiz)

module.exports = router