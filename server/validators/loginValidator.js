const validator = require('validator')

const validate = user => {
    const error = {}

    if (!user.email) {
        error.email = 'Please Provide Your Email'
    } else if (!validator.isEmail(user.email)) {
        error.email = 'Your Email is Not Valid'
    }

    if (!user.password) {
        error.password = 'Please Provide a Password'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate