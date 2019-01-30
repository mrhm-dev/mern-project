const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ParticipantSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    quiz: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    entryTime: Date,
    exitTime: Date,
    score: Number,
    answer: {
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    }
}, { timestamps: true })

const Participant = mongoose.model('Participant', ParticipantSchema)
module.exports = Participant