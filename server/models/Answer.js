const mongoose = require('mongoose')
const Schema = mongoose.Schema

const common = {
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: true
}

const AnswerSchema = new Schema({
    quiz: {
        ...common
    },
    author: {
        ...common
    },
    answers: [
        {
            question: {
                ...common
            },
            answer: {
                type: String,
                required: true,
                trim: true
            }
        }
    ]
}, { timestamps: true })

const Answer = mongoose.model('Answer', AnswerSchema)