const express = require('express');
const Quiz = require('../model/Quiz');
const router = express.Router(); //mini instance/application;
const bodyParser = require('body-parser');
const cors = require('cors')//to handle the different domains

//route to create the Quiz
router.post('/Quiz', async (req, res) => {
    //console.log("Hello from response")
    //get all data from body
    const { title, time, quizCode } = req.body;
    //check if all data exists
    if (!(title && time)) {
        console.log("All Fields Are Necessary")
        return res.status(400).send("All Fields are necessary");
    }
    const quiz = await Quiz.create({
        title,
        time,
        quizCode
    })
    return res.status(200).json(quiz);
})

//route to check the QuizCode entered by the user.
router.get('/Quiz/:quizCode', async (req, res) => {
    const { quizCode } = req.params;
    const response = Quiz.findById(quizCode)
    if (response) {
        return res.status(200).json(response);
    }
})

//route to display the question when quiz is display.

function getRandomIndex(max) 
{
    return Math.floor(Math.random() * max);
}

let usedIndexes=new Set();

router.get('/QuizDisplay/:quizId',async (req,res)=>{
    const {quizId}=req.params;
    const response=Quiz.findById(quizId);  
    if (!response) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
    //find the length of Questions Array
    const maxIndex = response.questions.length;
    //generate the random index using function
    let randomIndex = getRandomIndex(maxIndex);
    //add the index to the set
    usedIndexes.add(randomIndex);
    //find the question id
    const randomQuestionId=response.questions[randomIndex];
    //get the question from the database.
    const randomQuestion=await Question.findById(randomQuestionId);
    return res.json(randomQuestion);
})
router.get('/QuizDisplay/:quizId/next',async (req,res)=>{
    const {quizId}=req.params;
    const response=Quiz.findById(quizId);  
    const maxIndex = response.questions.length;
    let randomIndex = getRandomIndex(maxIndex);
    while (usedIndexes.has(randomIndex)) {
        randomIndex = getRandomIndex(maxIndex);
      }
    usedIndexes.add(randomIndex)
    const randomQuestionId=response.questions[randomIndex];
    const randomQuestion=await Question.findById(randomQuestionId);
    return res.json(randomQuestion);
})
module.exports = router



