const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    habits: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Habit"
        }
    ],
    xp: {
        type: Number,
        default: 0
    },
    level: {
        type: Number,
        default:1
    },
    coins: {
        type: Number,
        default: 0
    },
    badges: [string],
    streaks: {
        [habitId]: Number
    }
})

module.exports = mongoose.model("User", UserSchema)