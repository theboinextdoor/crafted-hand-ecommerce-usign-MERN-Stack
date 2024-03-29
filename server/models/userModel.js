const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const passwordComplexity = require('joi-password-complexity');
const Joi = require('joi');



// creating Schema
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: String,
    confirmPassword: String
})

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign(
        {_id:this._id}, 
        process.env.JWTPRIVATEKEY,
        {expiresIn : "7d"}  
        )

        return token;
}


const User = new mongoose.model('user', userSchema)

const validate= (data) => {
    const schema = Joi.object({
        first_name : Joi.string().required().label("First Name"),
        last_name : Joi.string().required().label("Last Name"),
        email: Joi.string().email().label("Email"),
        password: passwordComplexity().required().label("Password")
    })
    return schema.validate(data)
}

module.exports= {User , validate}