const Contact = require('../models/contact')

const addNewContact = async (req,res)=>{
    await Contact.create(req.body)
    return res.json({msg: "Contact Added"})
}
const getAllContact = async (req,res)=>{
    const contactList = await Contact.find({userId: req.query.userId})
    res.json({contactList})
}



module.exports = {addNewContact, getAllContact}