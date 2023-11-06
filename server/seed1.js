const mongoose = require('mongoose')
const Quiz = require('./model/Quiz')

mongoose.connect('mongodb://127.0.0.1:27017/Online-Quiz')
    .then(() => { console.log('DB connected'); })
    .catch((err) => { console.log('error in connecting to DB', err); })

const dummyQuiz = [
    {
        title: 'Java',
        ttlQues: 4,
        time: 10,
        questions: ['6548f26e7b00412cc3b6f1bf', '6548f26e7b00412cc3b6f1c0', '6548f26e7b00412cc3b6f1c1', '6548f26e7b00412cc3b6f1c2']
    }
]


async function seed1() {
    await Quiz.insertMany(dummyQuiz);
    console.log('data seeded successfully');
}

seed1();