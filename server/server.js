const express = require('express')
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const User = require("./models/User")
const Habit = require("./models/Habit")
const tokenDecode = require('./middlewares/authMiddleware')
// const removePwd = require('./middlewares/test')
require('dotenv').config()

const app = express()
app.use(express.json())

app.get('/api', (req, res) => {
    res.send("<h1>Hello</h1>")
})

app.post("/api/auth/register", async (req, res) => {
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
            // user: newUser
        })
    }

    // console.log({
    //     email, hashedPwd
    // })
})

app.post('/api/auth/login', async(req, res) => {
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

app.get('/api/auth/user', tokenDecode, async(req, res) => {
    // const {token} = req.body
    // if(!token) return res.status(400).json({err: "Token is invalid!"})
    // const validToken = jwt.verify(token, process.env.JWT_SECRET)
    // if(!validToken) return res.status(400).json({err: "Token is invalid!"})
    // const {_id} = validToken
    // console.log(_id)
    // console.log(req._id)
    const {_id} = req
    const user = await User.findById(_id).select("-password").populate('habits')
    return res.status(200).json({
        msg: "User found",
        user
    })
    console.log(user)
})

// hobits endpoints
app.post("/api/habits/create", tokenDecode, async(req, res) => {
    const {title, frequency, createdAt, logs} = req.body
    const userId = req._id
    if(!title || !frequency || !createdAt) return res.status(400).json({
        err: "Please provide all the fields!"
    }) 
    const newHabit = new Habit({
        title, 
        frequency,
        createdAt,
        logs,
        user: userId
    })
    const user = await User.findById(userId)
    await newHabit.save()
    user.habits = [...user.habits, newHabit._id]
    await user.save()
    return res.status(201).json({
        msg: "habit created",
        habit: newHabit
    })
})

app.get("/api/habits/:id", async(req, res) => {
    const habitId = req.params.id
    const habit = await Habit.findById(habitId)
    if(!habit) return res.status(400).json({
        err: "Habit does not exist!"
    })
    res.status(200).json({
        msg: "Habit found",
        habit
    })
})

app.put("/api/habits/update/:id", async(req, res) => {
    const habitId = req.params.id
    const habit = await Habit.findByIdAndUpdate(habitId, req.body, {new:true})
    res.status(200).json({
        msg: "Habit updated",
        habit
    })
})

app.delete("/api/habits/delete/:id", tokenDecode, async(req, res) => {
    const habitId = req.params.id
    const userId = req._id
    const habit = await Habit.findByIdAndDelete(habitId, {new:true})
    const user = await User.findById(userId)
    user.habits = user.habits.filter(item => String(item._id) !== String(habitId))
    await user.save()
    res.status(200).json({
        msg: "Habit deleted",
        habit
    })
})

app.post("/api/habits/:id/log", async(req, res) => {
    const {completed} = req.body
    const habitId = req.params.id
    const habit = await Habit.findById(habitId)
    const {logs} = habit
    const updatedLogs = [...logs, {
        date: new Date(),
        completed
    }]
    habit.logs = updatedLogs
    await habit.save()
    res.status(200).json({
        msg: "Log updated",
        habit
    })
    // console.log(logs)
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