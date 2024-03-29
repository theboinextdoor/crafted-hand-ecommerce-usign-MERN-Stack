const router = require('express').Router();
const { User, validate } = require('../models/userModel')
const bcrypt = require('bcrypt');


router.post('/signup', async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error) {
            return res.status(400).send({
                message: error.details[0].message
            })
        } else {
            const { email, password } = req.body()

            const existingUser = await User.findOne({ email: email });
            if (existingUser) {
                return res.status(409).send({
                    message: "User already exists"
                })
            } else {
                const salt = await bcrypt.genSalt(process.env.SALT);
                const hashedPassword = await bcrypt.hash(password, salt)

                await new User({
                    ...req.body,
                    password: hashedPassword,
                }).save();

                res.status(200).send({
                    message: "User created successfully"
                })
            }
        }
    } catch (error) {
        return res.status(500).send({
            message: "Internal Server error..."
        })
    }
})


module.exports = router;
