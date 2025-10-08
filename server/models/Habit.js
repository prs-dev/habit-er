const mongoose = require("mongoose")

const HabitSchema = new mongoose.Schema({
    title: String,
    frequency: {
        type: String,
        enum: ["daily", "weekly"]
    },
    createdAt: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    logs: [
        {
            date: Date,
            completed: Boolean
        }
    ],
    difficulty: {type: Number, default: 1},
    xpReward: {type: Number, default: 10},
    streak: {type: Number, default: 0},
    lastCompleted: Date
})

module.exports = mongoose.model("Habit", HabitSchema)