import React, { useState } from 'react'

function AddQuestion() {
    const [val, setVal] = useState(['']);
    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }

    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }

    const handleDelete = (i) => {
        const deleteVal = [...val]
        deleteVal.splice(i, 1)
        setVal(deleteVal)
    }

    console.log(val, 'data- ');


    return (
        <div className='min-h-screen'>
            <h1 className='text-4xl my-4 ' >Add Questions</h1>
            <form action="" className='flex justify-center my-4'>
                <div className='w-full flex flex-col justify-center items-center gap-2'>
                    {val.map((data, i) => {
                        return (
                            <div className='w-2/3 border-2 h-36 bg-red-600 p-5'>

                                <div className='w-full border h-1/2 mb-4'>
                                    <input className='w-full text-center h-full' type="text" placeholder='Type your Question...' value={data} onChange={e => handleChange(e, i)} />
                                </div>
                                <div className='flex flex-wrap gap-5 justify-center h-1/3'>
                                    <div className='h-full '><input className='h-full text-center' type="text" placeholder='OPTION A' /></div>
                                    <div className='h-full'><input className='h-full text-center' type="text" placeholder='OPTION B' /></div>
                                    <div className='h-full'><input className='h-full text-center' type="text" placeholder='OPTION C' /></div>
                                    <div className='h-full'><input className='h-full text-center' type="text" placeholder='OPTION D' /></div>
                                </div>
                                <button onClick={() => handleDelete(i)}>x</button>
                            </div>
                        )
                    })}
                    <div className='bg-red-600 hover:bg-red-400 w-32 rounded-md py-4 px-6 text-white' onClick={() => handleAdd()}>Add</div>
                </div>
            </form>
        </div>
    )
}

export default AddQuestion