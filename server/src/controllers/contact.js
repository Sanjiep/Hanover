const Contact = require('../models/contact')

const addNewContact = async (req,res)=>{
    await Contact.create(req.body)
    return res.json({msg: "Contact Added"})
}



module.exports = {addNewContact}