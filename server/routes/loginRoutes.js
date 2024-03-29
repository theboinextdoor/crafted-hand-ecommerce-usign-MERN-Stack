const router = require('express').Router();
const { User } = require("../models/userModel")
const Joi = require('joi')
const bcrypt = require('bcrypt')





router.post("/login", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({
                message: error.details[0].message
            })
        } else {
            const { email, password } = req.body();

            const user = await User.findOne({ email: email })
            if (!user) {
                res.status(401).send({
                    message: "Invalid Email or password"
                })
            } else {
                const validPassword = await bcrypt.compare(password, user.password)
                if (!validPassword) {
                    return res.status(401).send({
                        message: "Invalid Email or Password"
                    })
                } else {
                    const token = user.generateAuthToken()
                    res.status = (200).send({
                        data: token,
                        message: "Logged in successfully"
                    })
                }
            }
        }
    } catch (error) {
        return res.status(500).send({
            message: "Internal Server Error"
        })
    }
})


const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    })
    return schema.validate(data)
}
module.exports = router