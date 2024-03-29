const mongoose = require("mongoose");


module.exports = () => {

    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongodb connection Successfully...")
    } catch (error) {
        console.log("Server Connection Failed.....")
        console.log(error)
    }
}