const mongoose = require('mongoose')
const questionValidator = require('./questionValidator')

module.exports = ({
    title,
    description,
    category,
    skill,
    author,
    questions
}) => {
    const error = {}
    
    if (!title) {
        error.title = 'Please Provide a Quiz Title'
    } else if (title.length > 100) {
        error.title = 'Your Title Length Must be Smaller Than 100 Character'
    }

    if (!description) {
        error.description = 'Please Provide a Quiz Description'
    } else if (description.length > 5000) {
        error.description = 'Your Description Length Must be Smaller Than 100 Character'
    }

    if (!category) {
        error.category = 'You Have to Select a Category'
    } else if (!mongoose.Types.ObjectId.isValid(category)) {
        error.category = 'Category is Invalid'
    }

    if (!skill) {
        error.skill = 'You Have to Select a Skill'
    } else if (!mongoose.Types.ObjectId.isValid(skill)) {
        error.skill = 'Skill is Invalid'
    }

    if (!author) {
        error.author = 'You Have to Select a Author'
    } else if (!mongoose.Types.ObjectId.isValid(author)) {
        error.author = 'Author is Invalid'
    }

    if (questions.length < 2) {
        error.questions = 'You Must Provide At Least Two Question'
    } else {
        const questionError = questions.map(question => {
            return questionValidator(question).error
        })

        for (let i = 0; i < questionError.length; i++) {
            if (Object.keys(questionError[i]).length > 0) {
                error.questions = questionError
                break
            }
        }
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

// TODO: Duration validation