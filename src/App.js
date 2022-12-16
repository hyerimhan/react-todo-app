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
    <div className="container">
      <div className='todoBlock'>
        <div className='title'>
          <h1>할 일 목록</h1>
        </div>

        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
        
      </div>
    </div>
  );
}