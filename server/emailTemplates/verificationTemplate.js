const generateTemplate = info => {
    return `
        <strong>Hello ${info.name},</strong>
        <br>
        <p>Thank you for your interest in our site. We have receive your registration request. Here is your link to verify. Please Click the link below or copy paste the link to your favorite Browser</p>
        <a href=${info.link}>Verify</a>
        <br>
        <p>Or Copy Paste The Link</p>
        <br>
        <p>${info.link}</p>
        <br><br>
    `
}

module.exports = generateTemplate