import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function NewQuestion() {
    const navigate = useNavigate();
    const { quizCode } = useParams();
    const [quesNum, setQuesNum] = useState();
    const [desc, setDesc] = useState()
    const [options, setOptions] = useState(['', '', '', ''])
    const [answer, setAnswer] = useState()

    const findQuesNum = async () => {
        await axios.get(`http://localhost:5500/Quiz/${quizCode}`)
            .then((res) => {
                // setQuizData(res.data[0]);
                setQuesNum((res.data[0].questions.length + 1))
            })
            .catch((error) => console.log('Error during fetching quiz data:', error))
    }
    useEffect(() => {
        findQuesNum();
    }, []);

    const submitData = async (event) => {

        event.preventDefault();
        try {
            const response = await axios.post(`http://localhost:5500/Quiz/${quizCode}/question`,
                {
                    desc,
                    quesNum,
                    options,
                    answer
                });
            if (response && response.data) {
                // await addQuestion();
                navigate(`/CreateQuiz/${quizCode}/addQuestion`)
            }
        }
        catch (error) {
            toast.error("Error in adding Question");
            console.error(error);
        }

    }
    const handleDescChange = (event) => {
        setDesc(event.target.value);
    }
    const handleOptionChange = (event, index) => {
        const newOptions = [...options];
        newOptions[index] = event.target.value;
        setOptions(newOptions);
    }
    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    }

    return (
        <div className='min-h-screen my-5'>
            <form className="max-w-sm mx-auto" onSubmit={submitData}>
                <div className="mb-5">
                    <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900 ">Description</label>
                    <textarea type="text" id="desc" name='desc' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full h-24 p-2.5" placeholder="Type question here..." required
                        onChange={handleDescChange}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="option1" className="block mb-2 text-sm font-medium text-gray-900 ">Option A</label>
                    <input type="text" id="option1" name='options' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" onChange={(e) => handleOptionChange(e, 0)} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="option1" className="block mb-2 text-sm font-medium text-gray-900 ">Option B</label>
                    <input type="text" id="option1" name='options' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" onChange={(e) => handleOptionChange(e, 1)} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="option1" className="block mb-2 text-sm font-medium text-gray-900 ">Option C</label>
                    <input type="text" id="option1" name='options' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" onChange={(e) => handleOptionChange(e, 2)} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="option1" className="block mb-2 text-sm font-medium text-gray-900 ">Option D</label>
                    <input type="text" id="option1" name='options' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" onChange={(e) => handleOptionChange(e, 3)} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900 ">Answer</label>
                    <input type="text" id="answer" name='answer' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5" placeholder='e.g. A' onChange={handleAnswerChange} required />
                </div>
                <button type="submit" className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Save</button>
            </form>
        </div>
    )
}

export default NewQuestion