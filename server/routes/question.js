const express = require('express');
const Question = require('../model/Question');
const router = express.Router(); //mini instance/application;
const bodyParser = require('body-parser');
const cors=require('cors')//to handle the different domains


router.post('/Question',async (req, res)=>{
    //get all data from body
    const {desc,quesNum,options,answer}=req.body;
    //check if all data exists
    if(!(desc && quesNum && options && answer))
    {
        console.log("All Fields Are Necessary")
        return res.status(400).send("All Fields are necessary");
    }
    const question=await Question.create({
        desc,
        quesNum,
        options,
        answer
    })
    return res.status(200).json(question);
})


router.get('/Question/:id',async (req, res)=>{
    //get the id of the question
    let {id} = req.params
    //get all data from database
    let foundQuestion = await Question.findById(id);
    return res.status(200).json(foundQuestion);
})
