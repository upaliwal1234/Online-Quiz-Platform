const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    quizCreated: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Quiz"
        }
    ],
    quizPlayed: [
        {
            type: mongoose.Types.ObjectId,
            ref: "QuizHistory"
        }
    ]
})

const User = mongoose.model('User', userSchema);

module.exports = User;