import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function QuizDisplayPage() {
    const navigate = useNavigate();
    const { quizId } = useParams();
    const [quizData, setQuizData] = useState();
    const [selectedOption, setSelectedOption] = useState();
    const [timer, setTimer] = useState(0); // Timer state in seconds
    const [quizQuestions,setquizQuestions]=useState({});
    const [totalQuestions,settotalQuestions]=useState(0);
    const [currentQuestion,setcurrentQuestion]=useState(0)
    const startTimer = (durationInSeconds) => {
        setTimer(durationInSeconds);
        // Start a loop that decrements the timer every second
        const intervalID = setInterval(() => {
            setTimer((prevTimer) => {
                // Decrement the timer by 1 second if it's greater than 0
                if (prevTimer > 0) {
                    return prevTimer-1;
                } else {
                    // If the timer reaches 0, clear the interval and navigate
                    clearInterval(intervalID);
                    navigate('/');
                    return 0;
                }
            });
        }, 1000);
    
        // Return the interval ID to clear it later
        return intervalID;
    };
    
    
    useEffect(() => {
        if (quizQuestions && quizQuestions.length > 0) {
            setQuizData(quizQuestions[0]);
            setcurrentQuestion(0);
            const timerId = startTimer(quizQuestions.length * 60);
            return () => clearInterval(timerId); // Clear the interval on unmount
        }
    }, []);
    
    
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
    };

    const getNextQuestion = async () => {
        try {
            console.log(currentQuestion);
            const currQues=currentQuestion;

            if(currQues+1 >= totalQuestions) return navigate('/') 
            setQuizData(quizQuestions[currQues+1]);
            setcurrentQuestion(currQues+1);
        } catch (error) {
            console.error('Error during fetching next question:', error);
        }
    };

    useEffect(() => {
        
        const fetchQuizData = async () => {
            try {

                const response = await axios.get(`http://localhost:5500/QuizDisplay/${quizId}`);
                const quesIds=response.data.questions;
                settotalQuestions(response.data.questions.length)
                const response2=await axios.post('http://localhost:5500/getQuestions',{
                    quesIds
                })
                //console.log(response2)
                setquizQuestions(response2.data)

            } catch (error) {
                console.error('Error during fetching quiz data:', error);
            }
        };
        fetchQuizData();
    }, []);

    useEffect(()=>{
        //console.log("Questions",quizQuestions);
        setQuizData(quizQuestions[0]);
        setcurrentQuestion(0);
        startTimer(quizQuestions.length*60);

    },[quizQuestions])

    return (
        <div className='min-h-screen'>
            <div className='text-center m-4 text-white bg-red-600 rounded-lg'>Timer :{timer} seconds</div>
            <div action='' className='flex justify-center my-4'>
                <div className='w-full max-w-screen-md h-full flex flex-col justify-center items-center gap-2 p-4'>
                
                    {quizData && (
                        <div className='w-full border-2 h-auto bg-red-600 p-5'>
                            <div className='w-full border h-1/2 mb-4 text-white'>
                                Q : {quizData.desc}
                            </div>
                            <div className='flex flex-col gap-2'>
                                {quizData.options.map((option, index) => (
                                    <div className='flex items-center' key={index}>
                                        <input
                                            type='radio'
                                            id={`option${index}`}
                                            name='options'
                                            className='mr-2'
                                            onChange={handleOptionChange}
                                        // checked={selectedOption === `option${index}`}
                                        />
                                        <label htmlFor={`option${index}`}>{option}</label>
                                    </div>
                                ))}
                            </div>
                            <button
                                type='submit'
                                onClick={getNextQuestion}
                                className='bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out'>
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuizDisplayPage;