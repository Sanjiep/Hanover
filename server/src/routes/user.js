const express = require('express')
router = express.Router()
const {registerNewUser, deleteUser} = require('../controllers/user')

router.post ('/register', registerNewUser);

router.delete ('/user/:id',deleteUser)


module.exports = router