const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Sajilo_Delivery');

const connection = async () => {
    try {
        const isConnected = await mongoose.connect('mongodb://127.0.0.1:27017/Sajilo_Delivery');
        if (isConnected) {
            console.log("Server Connected")
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = connection;