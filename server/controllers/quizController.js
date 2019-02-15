const Quiz = require('../models/Quiz')
const Question = require('../models/Question')
const User = require('../models/User')
const {catchError} = require('../utils/error')

const quizValidator = require('../validators/quizValidator')


module.exports = {
    async createQuiz(req, res) {
        const {
            title = '',
            description = '',
            tags = [],
            category = '',
            skill = '',
            questions = [],
            durations = '',
            published = false
        } = req.body

        const author = req.user._id
        
        let validate = quizValidator({
            title, description, category, skill, author, questions
        })

        if (!validate.isValid) {
            res.status(400).json(validate.error)
        } else {
            try {
                
                const questionsID = questions.map(async question => {
                    let newQuestion = await new Question({ ...question }).save()
                    return newQuestion._id
                })
                let savedQuestions = await Promise.all(questionsID) 
                const quiz = await new Quiz({
                    title,
                    description,
                    tags,
                    category,
                    skill,
                    author,
                    questions: savedQuestions,
                    durations,
                    published
                }).save()
                return res.status(201).json(quiz)
            } catch (error) {
                return catchError(res, error)
            }
            
        }
        // Store Data
    },
    async getQuizByID(req, res) {
        let { id } = req.params
        let quiz = await Quiz.findById(id)
            .populate('author', 'name email')
            .populate('skill', 'name slug')
            .populate('category', 'name slug')
            .populate('questions')
        
        res.status(200).json(quiz)
    },
    async getQuestions(req, res) {
        let questions = await Question.find()
        res.json(questions)
    }
}

// Quiz Creation front end 