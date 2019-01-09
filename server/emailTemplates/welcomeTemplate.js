const generateTemplate = info => {
    return `
        <strong>Hello ${info.name},</strong>
        <br>
        <p>Thanks for activating your account. Now you can use your account and explore all of our features.</p>
        <a href=${info.link}>Explore</a>
        <br><br>
    `
}

module.exports = generateTemplate