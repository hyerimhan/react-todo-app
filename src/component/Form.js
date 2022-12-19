import React from 'react';

export default function Form({value, setValue, handleSubmit}) {
  console.log('Form is rendering')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <form className='flex pb-2' onSubmit={handleSubmit}>
      <input
        type="text"
        className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
        placeholder="해야 할 일을 입력하세요."
        value={value}
        onChange={handleChange}
      />
      <input
        type="submit"
        className="p-2 text-blue-200 border-2 border-blue-400 rounded hover:text-white hover:bg-blue-400"
        value="입력"
      />
    </form>
  )
}