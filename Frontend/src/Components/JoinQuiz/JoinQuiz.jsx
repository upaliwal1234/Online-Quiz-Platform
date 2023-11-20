import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { tokenCheck } from '../../helperToken';

function JoinQuiz() {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   let response = tokenCheck();
  //   if (!response) {
  //     navigate('/Login')
  //   }
  //   else {
  //     navigate('/CreateQuiz');
  //   }
  // }, [])
  return (
    <div className='min-h-screen'>

      <h1 className='text-center text-2xl m-4'> JoinQuiz </h1>
    </div>
  )
}

export default JoinQuiz