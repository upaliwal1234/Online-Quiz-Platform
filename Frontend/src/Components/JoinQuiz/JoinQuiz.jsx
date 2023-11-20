import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { tokenCheck } from '../../helperToken';

function JoinQuiz() {
  const navigate = useNavigate()
  useEffect(() => {
    let response = tokenCheck();
    if (!response) {
      navigate('/Login')
    }
    else {
      navigate('/join');
    }
  }, [])
  return (
    <div>JoinQuiz</div>
  )
}

export default JoinQuiz