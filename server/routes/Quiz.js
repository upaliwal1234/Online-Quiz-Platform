const express = require('express');
const Quiz = require('../model/Quiz');
const Question = require('../model/Question');
const User = require('../model/User')
const router = express.Router(); //mini instance/application;
const bodyParser = require('body-parser');
const cors = require('cors')//to handle the different domains


router.use(cors())
//route to create the Quiz
router.post('/Quiz', async (req, res) => {
    //console.log("Hello from response")
    //get all data from body
    const { title, time, quizCode, userId } = req.body;
    //check if all data exists
    if (!(title && time)) {
        console.log("All Fields Are Necessary")
        return res.status(400).send("All Fields are necessary");
    }
    let user = await User.findById(userId);
    let quiz = new Quiz({ title, time, quizCode });
    user.quizCreated.push(quiz);
    await user.save();
    await quiz.save();
    return res.status(200).json(quiz);
})

//route to add the question of a particular quiz
router.post('/Quiz/:quizCode/question', async (req, res) => {
    let { quizCode } = req.params;
    let { desc, quesNum, options, answer } = req.body;
    if (!(desc && quesNum && options && answer)) {
        console.log("All Fields Are Necessary")
        return res.status(400).send("All Fields are necessary");
    }
    let quiz = await Quiz.find({ "quizCode": quizCode });
    let question = new Question({ desc, quesNum, options, answer });
    quiz[0].questions.push(question);
    const newQuiz = await quiz[0].save();
    await question.save();
    return res.status(200).json(newQuiz);
})

//route to check the QuizCode entered by the user.
router.get('/Quiz/:quizCode', async (req, res) => {
    const { quizCode } = req.params;
    try {

        const response = await Quiz.find({ "quizCode": `${quizCode}` }).populate('questions');
        if (response) {
            return res.status(200).json(response);
        }
    }
    catch {
        return res.status(404).json({ message: 'Quiz not Found' });
    }
})

//route to display the question when quiz is display.

router.get('/QuizDisplay/:quizId', async (req, res) => {
    const { quizId } = req.params;
    const response = await Quiz.findById(quizId);
    if (!response) {
        return res.status(404).json({ message: 'Quiz not found' });
    }
    return res.json(response);
})

router.post('/getQuestions',async(req,res)=>{
    //console.log(req.body.quesIds)
    const quesIds=req.body.quesIds;
    const quizQuestions=[]
    await Promise.all( quesIds.map(async (id)=>{
        const question= await Question.findById(id);
        quizQuestions.push(question)
    }))
    return res.json(quizQuestions);
})
module.exports = router



