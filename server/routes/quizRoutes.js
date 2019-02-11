const router = require('express').Router()
const { createQuiz, getQuestions, getQuizByID } = require('../controllers/quizController')
const authenticate = require('../passport/authenticateMiddleware')

router.post('/create', authenticate, createQuiz)
router.get('/questions', getQuestions)
router.get('/quizzes/:id', getQuizByID)

module.exports = router