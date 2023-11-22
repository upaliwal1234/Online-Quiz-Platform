import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { tokenCheck } from '../../helperToken';
import { Link } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')

  useEffect(() => {
        let response = tokenCheck();
        if(!response)
        {
          navigate('/Login')
        }
        else{
          navigate('/')
        }
  }, [])

  return (
    <>
      <div className="bg-gray-100 min-h-screen bg-red-600">
        <div className="container mx-auto p-6 sm:p-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Welcome to Quizify!</h1>

          <div className="h-full sm:h-80 text-center flex flex-col sm:flex-row gap-5 sm:gap-20 max-w-full justify-center my-20">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:w-1/2 sm:h-80 sm:py-12">
              <h2 className="text-2xl text-center font-bold mb-4">Join a Quiz</h2>
              <p className="text-lg leading-relaxed sm:my-10">
                Ready to challenge yourself? Join one of our quizzes and test your knowledge on various topics.
              </p>
              <div className="mt-6 sm:my-10 ">
                <Link to="/JoinQuiz" className="bg-red-600 text-white hover:bg-red-300 font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out">Join Quiz</Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 sm:w-1/2 sm:h-80 sm:py-12">
              <h2 className="text-2xl text-center font-bold mb-4">Create a Quiz</h2>
              <p className="text-lg leading-relaxed sm:my-10">
                Feeling creative? Design your own quiz and share it with the world. Let others enjoy your quiz-making skills!
              </p>
              <div className="mt-6 sm:my-10">
                <Link to="/CreateQuiz" className="bg-red-600 text-white hover:bg-red-300 font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out">Create Quiz</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home