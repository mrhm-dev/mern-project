const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    like: [
        {
            author: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    dislike: [
        {
            author: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    report: String
}, { timestamps: true })

const Review = mongoose.model('Review', ReviewSchema)
module.exports = Review