const User = require('../models/user')
const registerNewUser = (req,res)=>{
    User.create(req.body)
    res.json({
        msg: "User registered successfully"
    })
}

const deleteUser = async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json({
        msg: "User deleted successfully"
    })
}


module.exports = {registerNewUser, deleteUser}