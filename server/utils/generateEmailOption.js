const generateEmailOption = ({to, subject, template}) => {
    return {
        from: '"Twinkle Cats" <testuser@twinklecats.com>', // sender address
        to, // list of receivers
        subject, // Subject line
        html: template
    }
}

module.exports = generateEmailOption