require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const connection = require("./database/db")
const signupRoutes = require('./routes/signupRoutes')
const loginRoutes = require("./routes/loginRoutes")

// databse connection 
connection()


// middleware
app.use(express.json());
app.use(cors());


// routes
app.use("/signup", signupRoutes)
app.use("/login", loginRoutes)

const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=> {
    console.log(`Server is running on PORT ${PORT}....`)
})