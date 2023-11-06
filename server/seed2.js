const mongoose = require('mongoose')
const Question = require('./model/Question')

mongoose.connect('mongodb://127.0.0.1:27017/Online-Quiz')
    .then(() => { console.log('DB connected'); })
    .catch((err) => { console.log('error in connecting to DB', err); })

const dummyQuestion = [
    {
        desc: "How many datatypes are there in JAVA?",
        quesNum: 1,
        options: ['4', '6', '8', '12'],
        answer: '8'
    },
    {
        desc: "How many datatypes are there in Python?",
        quesNum: 2,
        options: ['4', '6', '8', '12'],
        answer: '8'
    },
    {
        desc: "How many datatypes are there in C?",
        quesNum: 3,
        options: ['4', '6', '8', '12'],
        answer: '8'
    },
    {
        desc: "How many datatypes are there in HTML?",
        quesNum: 4,
        options: ['0', '1000', '100', '10'],
        answer: '1000'
    },
]

async function seed2() {
    await Question.insertMany(dummyQuestion);
    console.log('data seeded successfully');
}

seed2();