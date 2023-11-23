import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function QuizDisplayPage() {
    const navigate = useNavigate();
    const { quizId } = useParams();
    const [quizData, setQuizData] = useState();
    const [selectedOption, setSelectedOption] = useState();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.id);
    };

    const getNextQuestion = async () => {
        try {
            const response = await axios.get(`http://localhost:5500/QuizDisplay/${quizId}/next`);

            if (response.data.desc == 'Quiz Completed') {
                navigate('/');
            }
            else {
                setQuizData(response.data);
            }
        } catch (error) {
            console.error('Error during fetching next question:', error);
        }
    };

    useEffect(() => {
        const fetchQuizData = async () => {
            try {
                const response = await axios.get(`http://localhost:5500/QuizDisplay/${quizId}`);
                setQuizData(response.data);
            } catch (error) {
                console.error('Error during fetching quiz data:', error);
            }
        };
        fetchQuizData();
    }, []);

    return (
        <div className='min-h-screen'>
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