import validator from 'validator'

const registerValidator = ({ name, email, password, confirmPassword }) => {
    const error = {}
    if (name.touched && !name.value) {
        error.name = 'You Must Provide Name'
    }

    if (email.touched && !email.value) {
        error.email = 'You Must Provide Email'
    } else if (email.touched && !validator.isEmail(email.value)) {
        error.email = 'Email Not Valid'
    }

    if (password.touched && !password.value) {
        error.password = 'Please Provide a Password'
    } else if (password.touched && password.value.length < 6) {
        error.password = 'Password Must be Greater or Equal 6 Character'
    }

    if (confirmPassword.touched && !confirmPassword.value) {
        error.confirmPassword = 'Please Provide Confirmation Password'
    } else if (confirmPassword.touched && (password.value !== confirmPassword.value)) {
        error.confirmPassword = 'Password Doesn\'t Match' 
    }

    return error
}

export default registerValidator