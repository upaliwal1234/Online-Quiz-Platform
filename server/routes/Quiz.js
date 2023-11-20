const express = require('express');
const Quiz = require('../model/Quiz');
const router = express.Router(); //mini instance/application;
const bodyParser = require('body-parser');
const cors = require('cors')//to handle the different domains

router.post('/Quiz', async (req, res) => {
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

//get the quiz from the database
router.get('/Quiz/:id', async (req, res) => {
    //get the id of the quiz
    let { id } = req.params
    //get all data from database
    let foundQuiz = await Quiz.findById(id);
    return res.status(200).json(foundQuiz);
})

module.exports = router