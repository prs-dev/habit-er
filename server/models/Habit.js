const mongoose = require("mongoose")

const HabitSchema = new mongoose.Schema({
    title: String,
    frequency: "daily" | "weekly",
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
    ]
})

module.exports = mongoose.model("Habit", HabitSchema)