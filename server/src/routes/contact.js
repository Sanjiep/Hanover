const express = require('express')
router = express.Router()
const {addNewContact, getAllContact} = require('../controllers/contact')

router.post('/contact', addNewContact);
router.get('/contact', getAllContact);

module.exports = router