import './App.css';
import { useState } from 'react'
import React from 'react';
import Lists from './component/Lists';
import Form from './component/Form';

export default function App() {

  const [todoData, setTodoData] = useState([
    {
      id: 1,
      title: '공부하기',
      completed: false,
    },
    {
      id: 2,
      title: '청소하기',
      completed: false,
    }
  ])

  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    }

    setTodoData(prev => 
      [...prev, newTodo]
    )
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className='w-full p-6 m-4 bg-white rounded shadow md:max-w-lg md:w-3/4 lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1>
            할 일 목록
          </h1>
        </div>

        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
        <Lists todoData={todoData} setTodoData={setTodoData} />
        
      </div>
    </div>
  );
}