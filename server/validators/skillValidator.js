const validate = ({name, slug}) => {
    const error = {}

    if (!name) {
        error.name = 'Please Provide a Valid Category Name'
    }

    if (!slug) {
        error.slug = 'Please Provide a Valid Slug'
    }

    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = validate