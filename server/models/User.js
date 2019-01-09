const mongoose = require('mongoose')
const Schema = mongoose.Schema

const common = {
    type: String,
    required: true,
    trim: true
}

const userSchema = new Schema({
    name: {
        ...common
    },
    email: {
        ...common
    },
    password: {
        ...common
    },
    accountStatus: String,
    isActivated: Boolean,
    activateToken: String,
})

const model = mongoose.model('User', userSchema)
module.exports = model

/*

User:
    name: String
    email: String
    password: String
    accountStatus: String
    isActivated: Boolean
    activateToken: String
    role: String
    profile: Profile
    logs: [UserLog]

*/