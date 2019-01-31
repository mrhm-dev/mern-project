const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const passport = require('passport')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./passport/jwtStrategy')(passport)

// Routers
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/quiz', require('./routes/quizRoutes'))
app.use('/api/category', require('./routes/categoryRoutes'))
app.use('/api/skill', require('./routes/skillRoutes'))

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server is Running'
    })
})

// Error Handling

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server is On Fire...')
    mongoose.connect('mongodb://localhost:27017/mern-project', { useNewUrlParser: true }, () => {
        console.log('Database running')
    });
})