const mongoose = require('mongoose');
const Quiz = require('./model/Quiz');

mongoose.connect('mongodb://127.0.0.1:27017/Online-Quiz')
    .then(() => { console.log('DB connected'); })
    .catch((err) => { console.log('Error in connecting to DB', err); });

const dummyQuiz = [
    {
        title: 'Java',
        ttlQues: 4,
        time: 10,
        quizCode: 'A1S2D3',
        questions: ['655e0ab3e714a98a87a2cc0d', '655e0ab3e714a98a87a2cc0e', '655e0ab3e714a98a87a2cc0f', '655e0ab3e714a98a87a2cc10']
    }
];

async function seed1() {
    try {
        await Quiz.insertMany(dummyQuiz);
        console.log('Data seeded successfully');
    } catch (err) {
        console.error('Error seeding data:', err);
    }
}

seed1();
