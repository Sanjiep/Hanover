const express = require('express')
router = express.Router()
const {registerNewUser,loginUser, deleteUser,} = require('../controllers/user')

router.post('/register', registerNewUser);

router.post('/login', loginUser);

module.exports = router