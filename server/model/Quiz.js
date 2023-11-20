const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    ttlQues: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        min: 1
    },
    questions: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Question",
            required: true
        }
    ],
    quizCode:{
        required:true,
        type:Number
    }
})

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;