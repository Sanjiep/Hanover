const User = require('../models/user')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const registerNewUser = async(req,res)=>{
    try{
        const existingUser = await User.findOne({email: req.body.email})
        if(existingUser){
            return res.status(403).json({
                msg: "User email already exist"
            })
        }
        const hashPass = await bcrypt.hash(req.body.password, saltRounds )
        req.body.password = hashPass
        await User.create(req.body)
        res.json({
            msg: "User registered successfully"
        })
    }catch(err){
        console.log(err)
    }
}


const loginUser = async (req, res) => {
    try {
        const userDetails = await User.findOne({ email: req.body.email });

        if (userDetails) {
            const match = await bcrypt.compare(req.body.password, userDetails.password);

            if (match) {
                res.status(200).json({
                    msg: 'Login successful',
                });
            } else {
                res.status(403).json({
                    msg: 'Incorrect password',
                });
            }
        } else {
            res.status(403).json({
                msg: 'Email does not exist',
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Internal Server Error',
        });
    }
};



module.exports = {registerNewUser, loginUser}