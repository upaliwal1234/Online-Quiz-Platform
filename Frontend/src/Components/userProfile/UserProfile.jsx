import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { tokenCheck } from '../../helperToken';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function UserProfile() {
  const [User, setUser] = useState({});
  // The useNavigate hook is part of the React Router library used for navigation in React applications that use routing.
  const navigate = useNavigate()
  useEffect(() => {
    let response = tokenCheck();
    if (!response) {
      navigate('/Login')
    }
    else {
      const { id } = response;
      navigate('/userProfile');
      DisplayDetails(id);
    }
  }, [])

  const DisplayDetails=async (userId)=>{
    try 
    {
      const userData = await axios.get(`http://localhost:5500/user/${userId}`);
      console.log(User.data);
      setUser(userData.data);
    } catch (error) 
    {
      console.error('Error :', error);
    }
  };
  return (
    <div className="flex justify-center items-center m-10">
      <div className="bg-red-600 p-4">
        <div className="bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Student Profile</h1>
          <div className="flex items-center mb-4 justify-center">
            <div>
              <h2 className="text-lg font-semibold text-center">{User.name}</h2>
              <p className="text-gray-500 text-center">{User.email}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Bio:</h3>
            <p className="text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel sapien eget...
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-center">Stats:</h3>
            <div className="flex justify-center">
              <div>
                <p className="font-semibold text-center">Quiz Created:{User.quizCreated}</p>
                <p className="font-semibold text-center">Quiz played:{User.quizPlayed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
