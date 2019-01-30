const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SkillSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    body: String
})

const Skill = mongoose.model('Skill', SkillSchema)
module.exports = Skill