import React from 'react';

function QuestionDisplay() {
  return (
    <div style={{ backgroundColor: '#e70e02' }} className='question-container bg-gray-100 p-4 rounded-md shadow-md max-w-24 mx-auto m-11'>
        <div className='option flex items-center bg-white rounded-md p-2 shadow-sm mb-2'>Write Your Question here</div>
      <div className='options'>
        <div className='option flex items-center bg-white rounded-md p-2 shadow-sm mb-2'>
          <input type='radio' id='option1' name='options' value='Option 1' className='mr-2' />
          <label htmlFor='option1'>Option 1</label>
        </div>
        <div className='option flex items-center bg-white rounded-md p-2 shadow-sm mb-2'>
          <input type='radio' id='option2' name='options' value='Option 2' className='mr-2' />
          <label htmlFor='option2'>Option 2</label>
        </div>
        <div className='option flex items-center bg-white rounded-md p-2 shadow-sm mb-2'>
          <input type='radio' id='option3' name='options' value='Option 3' className='mr-2' />
          <label htmlFor='option3'>Option 3</label>
        </div>
        <div className='option flex items-center bg-white rounded-md p-2 shadow-sm mb-2'>
          <input type='radio' id='option4' name='options' value='Option 4' className='mr-2' />
          <label htmlFor='option4'>Option 4</label>
        </div>
      </div>
    </div>
  );
}

export default QuestionDisplay;
