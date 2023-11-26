import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { tokenCheck } from '../../helperToken';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Questions() {
    useEffect(() => {
        let response = tokenCheck();
        if (!response) {
            navigate('/Login')
        }
        //     else {
        //         navigate('/CreateQuiz');
        //     }
    }, [])
    const navigate = useNavigate();

    const { quizCode } = useParams();
    const [quizData, setQuizData] = useState({});
    const [questions, setQuestions] = useState([]);

    const fetchQuizData = async () => {
        return (
            await axios.get(`http://localhost:5500/Quiz/${quizCode}`)
                .then((res) => {
                    setQuizData(res.data[0]);
                    setQuestions(res.data[0].questions)
                })
                .catch((error) => console.log('Error during fetching quiz data:', error))
        )
    };

    useEffect(() => {
        fetchQuizData();
    }, []);

    const addQuestion = (event) => {
        navigate(`new`)
    }

    const navigateEdit = (event, id) => {
        event.preventDefault();
        navigate(`${id}/edit`);
    }

    const handleDelete = async (event, id) => {
        event.preventDefault();
        try {
            const response = await axios.delete(`http://localhost:5500/Question/${id}`);
            if (response.status == 200) {
                fetchQuizData();
                toast.success("Question Deleted Successfully");
            }
            else if (!response) {
                toast.error("Error in deletion");
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className='min-h-screen flex justify-center w-full'>
            <div className='my-10 item justify-center w-2/3'>
                <h1 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 text-center">Quiz Title: {quizData.title}</h1>
                {questions.map((dataObj, index) => {
                    return (
                        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow m-2 w-full">
                            <p className="mb-3 text-lg font-bold text-gray-700">{quizData.questions[index].desc}</p>
                            <div className='flex justify-between w-1/2 my-2'>
                                <span className="py-2 text-base font-medium text-center text-gray-800  rounded-md">Options: </span>
                                <span className="items-center px-6 py-2 text-base font-medium text-center text-gray-800  rounded-md">{quizData.questions[index].options[0]}</span>
                                <span className="items-center px-6 py-2 text-base font-medium text-center text-gray-800  rounded-md">{quizData.questions[index].options[1]}</span>
                                <span className="items-center px-6 py-2 text-base font-medium text-center text-gray-800  rounded-md">{quizData.questions[index].options[2]}</span>
                                <span className="items-center px-6 py-2 text-base font-medium text-center text-gray-800  rounded-md">{quizData.questions[index].options[3]}</span>
                            </div>

                            <div className='text-right'>
                                <button onClick={(event) => navigateEdit(event, quizData.questions[index]._id)} className="inline-flex items-center px-6 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Edit</button>
                                <button onClick={(event) => handleDelete(event, quizData.questions[index]._id)} className="inline-flex items-center mx-4 px-6 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Delete</button>
                            </div>
                        </div>
                    )
                })}
                <div className='flex justify-center'>
                    <button onClick={addQuestion} className="w-40 items-center px-6 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300">Add Question</button>
                </div>
                <div className='flex justify-center'>
                    <Link to='/' className="w-40 my-4 items-center px-6 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300">Save Quiz</Link>
                </div>
            </div>
            <ToastContainer />
        </div >
    )
}

export default Questions