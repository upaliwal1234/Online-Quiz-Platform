import React from 'react'

function AddQuestion() {
    const [val, setVal] = useState([]);
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
            <button onClick={() => handleAdd()}>Add</button>
            {val.map((data, i) => {
                return (
                    <div>
                        <input type="text" value={data} onChange={e => handleChange(e, i)} />
                        <button onClick={() => handleDelete(i)}>x</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AddQuestion