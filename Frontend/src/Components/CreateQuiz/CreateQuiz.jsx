import React from 'react'
import { tokenCheck } from '../../helperToken';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateQuiz() {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   let response = tokenCheck();
  //   if (!response) {
  //     navigate('/Login')
  //   }
  //   else {
  //     navigate('/CreateQuiz');
  //   }
  // }, [])

  return (
    <div className='min-h-screen'>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-left">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create Your Quiz</h1>
        </div>
      </header>
      <main>
        <div className="">
          <form className='border mt-1' >
            <div className='mx-auto  max-w-10xl py-6 sm:px-6 lg:px-8 text-left flex justify-center gap-4'>
              <div className="w-1/3 py-20 border border-black/30 rounded-lg p-4 flex flex-col gap-4">
                <div>
                  <label
                    className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="name"
                  >
                    Quiz Title
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter quiz title"
                    id="name"
                  />
                </div>
                <div>
                  <label
                    className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="time"
                  >Time</label>
                  <input
                    className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    id="time"
                    placeholder='Enter Time in Minutes'
                  />
                </div>

              </div>
              <div className='w-2/3 py-2 border border-black/30 rounded-lg p-4 flex flex-col gap-4' >
                <h1 className='text-center text-2xl'>Add Questions</h1>
                <div></div>
              </div>
            </div>
            <div className='flex justify-end px-6'>
              <button type="button" className="m-1 py-3 px-4 w-32 items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                Save
              </button>
            </div>
          </form>
        </div>
      </main >
    </div >
  )
}

export default CreateQuiz