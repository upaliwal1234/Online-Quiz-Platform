import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { tokenCheck } from '../../helperToken';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function JoinQuiz() {
  const navigate = useNavigate()
  useEffect(() => {
    let response = tokenCheck();
    if (!response) {
      navigate('/Login')
    }
    else {
      navigate('/JoinQuiz');
    }
  }, [])
  const [quizCode, setQuizCode] = useState('');
  
  const handleJoinQuiz = async() => {
    const response = await axios.get(`http://localhost:5500/Quiz/${quizCode}`);
        if(response)
        {
          navigate(`/QuizDisplay/${response.id}`)
        }
        else
        {
          toast.error("Wrong Quiz Code");
        }
  };
  return (
    <>
      <div className="bg-red-600 h-96">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">Join a Quiz</h1>

          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Enter Quiz Code"
              className="border border-gray-400 rounded-md py-2 px-4 mr-2"
              value={quizCode}
              onChange={(e) => setQuizCode(e.target.value)}
            />
            <button
              className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
              onClick={handleJoinQuiz}>
              Join Quiz
            </button>
          </div>

        </div>
      </div>
      <ToastContainer /> {/* Add this line to render the ToastContainer */}
    </>
  )
}

export default JoinQuiz