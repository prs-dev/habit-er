const express = require('express')
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const User = require("./models/User")
// const removePwd = require('./middlewares/test')
require('dotenv').config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>")
})

app.post("/auth/register", async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ err: "Please provide all the fields!" })
    const salt = bcrypt.genSaltSync(12)
    const hashedPwd = bcrypt.hashSync(password, salt)
    const newUser = new User({
        email,
        password: hashedPwd
    })
    await newUser.save()
    if (newUser) {
        const { password: pwd, ...responseData } = newUser._doc
        res.status(201).json({
            msg: "User created successfully.",
            user: responseData
        })
    }

    // console.log({
    //     email, hashedPwd
    // })
})

app.post('/auth/login', async(req, res) => {
    const {email, password} = req.body
    if (!email || !password) return res.status(400).json({ err: "Please provide all the fields!" })
    const user = await User.findOne({email}).lean()
    if(!user) return res.status(400).json({err: "User does not exist!"})
    // console.log(user)
    delete user.password
    const token = jwt.sign({
        _id: user._id
    }, process.env.JWT_SECRET)
    res.status(200).json({
        msg: "User logged in, successfully",
        token
    })
// console.log(user)
    // res.status(200).json({
    //     msg: "User Found",
    //     user
    // })
})

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("connected to MONGODB")
    })
    .catch(err => {
        console.log(`Error connecting to db ${err}`)
    })

app.listen(5000, () => {
    console.log("api is running...")
})