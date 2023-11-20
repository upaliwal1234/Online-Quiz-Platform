import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { tokenCheck } from '../../helperToken';
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
          setEmail(response.email);
        }
  }, [])

  return (
    <>
    <div className="bg-gray-100 min-h-screen bg-red-600">
    <div className="container mx-auto p-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Welcome to Quizify!</h1>
      
      <div className="grid h-80 grid-cols-1  gap-12">
          <div className="bg-white rounded-lg shadow-lg p-6 min-h-80">
            <h2 className="text-2xl font-bold mb-4">Join a Quiz</h2>
            <p className="text-lg leading-relaxed">
              Ready to challenge yourself? Join one of our quizzes and test your knowledge on various topics.
            </p>
            <div className="mt-6">
              <a href="/quizzes" className="bg-red-600 text-white hover:bg-red-300 font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out">Join Quiz</a>
            </div>
          </div>
        
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Create a Quiz</h2>
            <p className="text-lg leading-relaxed">
              Feeling creative? Design your own quiz and share it with the world. Let others enjoy your quiz-making skills!
            </p>
            <div className="mt-6">
              <a href="/create" className="bg-red-600 text-white hover:bg-red-300 font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out">Create Quiz</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default Home