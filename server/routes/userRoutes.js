const router = require('express').Router()
const {register, activateAccount, getAllUsers, removeUser, login} = require('../controllers/userController')

router.post('/register', register)
router.post('/login', login)
router.get('/activateaccount/:token', activateAccount)
router.delete('/delete/:id', removeUser)

router.get('/all', getAllUsers)


module.exports = router