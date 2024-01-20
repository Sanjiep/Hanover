const User = require('../models/user')
const registerNewUser = async(req,res)=>{
    try{
        const existingUser = await User.findOne({phoneNumber: req.body.phoneNumber})
        if(existingUser){
            return res.status(403).json({
                msg: "User phonenumber already exist"
            })
        }
        await User.create(req.body)
        res.json({
            msg: "User registered successfully"
        })
    }catch(err){
        console.log(err)
    }
  
}


const deleteUser = async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json({
        msg: "User deleted successfully"
    })
}


module.exports = {registerNewUser, deleteUser}