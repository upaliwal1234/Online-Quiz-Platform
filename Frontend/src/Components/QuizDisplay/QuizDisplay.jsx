import React from 'react'

function QuizDisplay() {
    return (
        <div className='min-h-screen'>

            <form action="" className=' flex justify-center my-4'>
                <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
                    <div className='w-2/3  border-2 h-80 bg-red-600 p-5'>

                        <div className='w-full border h-1/2 mb-4'>
                            <input className='w-full text-center h-full' type="text" placeholder='Type your Question...' />
                        </div>
                        <div className='flex flex-wrap gap-5 justify-center h-1/3'>
                            <div className='h-full '><input className='h-full text-center' type="text" placeholder='OPTION A' /></div>
                            <div className='h-full'><input className='h-full text-center' type="text" placeholder='OPTION B' /></div>
                            <div className='h-full'><input className='h-full text-center' type="text" placeholder='OPTION C' /></div>
                            <div className='h-full'><input className='h-full text-center' type="text" placeholder='OPTION D' /></div>
                        </div>
                    </div>
                    <div className='bg-red-600 hover:bg-red-400 w-32 rounded-md py-4 px-6 text-white'>Submit</div>
                </div>
            </form>
        </div>
    )
}

export default QuizDisplay