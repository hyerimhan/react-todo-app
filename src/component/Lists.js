import React from 'react'


export default function Lists({todoData, setTodoData}) {

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData)
  }

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }

      return data
    })
    
    setTodoData(newTodoData)
  }

  return (
    <div>
      {todoData.map((data) => (
        <div className='flex items-center w-full justify-between px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded' key={data.id}>
          <div className='items-center'>
            <input 
              type="checkbox"
              onChange={() => handleCompleteChange(data.id)}
              defaultChecked={data.completed} 
            />{" "}
            <span className={data.completed ? "line-through" : ''}>
              {data.title}
            </span>
          </div>
          <div className='items-center'>
            <button 
              onClick={() => handleClick(data.id)}
            >x</button>
          </div>
        </div>
      ))}
    </div>
  )
}
