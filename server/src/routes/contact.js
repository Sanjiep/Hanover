const express = require('express')
router = express.Router()
const {addNewContact} = require('../controllers/contact')

router.post('/contact', addNewContact);

module.exports = router