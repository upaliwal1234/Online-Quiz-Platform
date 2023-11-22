const express = require('express')
const app = express()
const Quiz = require('./model/Quiz')
const mongoose = require('mongoose')
const Question = require('./model/Question')
const User = require('./model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const cors = require('cors')
const loginSignupRoutes = require('./routes/loginSignupRoutes')
const quizRoutes = require('./routes/Quiz')
const userRoutes = require('./routes/user')
const questionRoutes = require('./routes/question')

app.use(bodyParser.json());
app.use(cors())
app.use(loginSignupRoutes);
app.use(quizRoutes);
app.use(userRoutes);

app.use(questionRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/Online-Quiz')
    .then(() => { console.log('DB connected'); })
    .catch((err) => { console.log('error in connecting to DB', err); })

app.get('/', (req, res) => {
    res.send('you are at root route')
})

app.get('/quizes', async (req, res) => {
    const quizzes = await Quiz.find().populate('questions');
    res.send(quizzes);
})

app.get('/questions', async (req, res) => {
    const questions = await Question.find({});
    res.send(questions);
})


const PORT = 5500;
app.listen(PORT, (err) => {
    console.log(`server is connected at port ${PORT}`);
})
app.use(cookieParser())