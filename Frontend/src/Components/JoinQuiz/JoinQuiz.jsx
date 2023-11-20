import React, {useState, useEffect } from 'react'
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
      navigate('/JoinQuiz');
    }
  }, [])
  const [quizCode, setQuizCode] = useState('');
  const [joinedQuiz, setJoinedQuiz] = useState('');
  
  const handleJoinQuiz = () => {
    // For demonstration, let's assume the quiz code is valid and set the joined quiz
    setJoinedQuiz(quizCode);
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
      {joinedQuiz && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Joined Quiz</h2>
          <p className="text-lg leading-relaxed">
            You have successfully joined the quiz with code: {joinedQuiz}
          </p>
        </div>
      )}
    </div>
  </div>
  
    </>
  )
}

export default JoinQuiz