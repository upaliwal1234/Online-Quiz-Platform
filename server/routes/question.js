const express = require('express');
const Question = require('../model/Question');
const router = express.Router(); //mini instance/application;
const bodyParser = require('body-parser');
const cors = require('cors')//to handle the different domains


router.post('/Question/new', async (req, res) => {
    //get all data from body
    const { desc, quesNum, options, answer } = req.body;
    //check if all data exists
    if (!(desc && quesNum && options && answer)) {
        console.log("All Fields Are Necessary")
        return res.status(400).send("All Fields are necessary");
    }
    const question = await Question.create({
        desc,
        quesNum,
        options,
        answer
    })
    return res.status(200).json(question);
})

router.patch('/Question/:id/edit', async (req, res) => {
    let { id } = req.params;
    try {
        let { desc, quesNum, options, answer } = req.body;
        let question = await Question.findById(id);
        question.desc = desc;
        question.quesNum = quesNum;
        question.options = options;
        question.answer = answer;
        await question.save();
        return res.status(200).json(question);
    } catch (error) {
        return res.status(500).json({ message: error })
    }
})

router.delete('/Question/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const question = await Question.findByIdAndDelete(id);
        return res.status(200).json(question);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
})

router.get('/Question/:id', async (req, res) => {
    //get the id of the question
    let { id } = req.params
    //get all data from database
    let foundQuestion = await Question.findById(id);
    return res.status(200).json(foundQuestion);
})

module.exports = router;