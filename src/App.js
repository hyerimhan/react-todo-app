import './App.css';
import { useState } from 'react'
import Lists from './component/Lists';
import Form from './component/Form';

const initialTodoData = localStorage.getItem('todoData') 
  ? JSON.parse(localStorage.getItem('todoData')) 
  : [];

export default function App() {
  const [todoData, setTodoData] = useState(initialTodoData)
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    }

    setTodoData(prev => [...prev, newTodo])
    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]))

    setValue('')
  }

  const handleRemoveClick = () => {
    setTodoData([])
    localStorage.setItem('todoData', JSON.stringify([]))
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className='w-full p-6 m-4 bg-white rounded shadow md:max-w-lg md:w-3/4 lg:w-3/4 lg:max-w-lg'>
        <div className='flex justify-between mb-3'>
          <h1>
            할 일 목록
          </h1>
          <button onClick={handleRemoveClick}>Delete all</button>
        </div>

        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
        <Lists todoData={todoData} setTodoData={setTodoData} />
        
      </div>
    </div>
  );
}