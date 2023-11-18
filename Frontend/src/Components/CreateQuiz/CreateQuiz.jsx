import React from 'react'
import { tokenCheck } from '../../helperToken';
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function CreateQuiz() {
  const navigate=useNavigate()
  useEffect(() => {
    let response = tokenCheck();
    if(!response)
    {
      navigate('/Login')
    }
    else
    {
      navigate('/CreateQuiz');
    }
}, [])

  return (
    <div>CreateQuiz</div>
  )
}

export default CreateQuiz