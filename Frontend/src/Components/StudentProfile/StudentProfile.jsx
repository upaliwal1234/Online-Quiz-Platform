import React from 'react';

function StudentProfile() {
  return (
    <div className="flex justify-center items-center m-10">
      <div className="bg-red-600 p-4">
        <div className="bg-white rounded-lg border border-gray-300 shadow-md p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Student Profile</h1>
          <div className="flex items-center mb-4 justify-center">
            <div>
              <h2 className="text-lg font-semibold text-center">Student Name</h2>
              <p className="text-gray-500 text-center">Student id</p>
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
                <p className="text-gray-600 text-center">Quizzes Taken</p>
                <p className="font-semibold text-center">25</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
