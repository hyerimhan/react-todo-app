import React, { useState } from 'react'

const List = React.memo(({ id, title, completed, todoData, setTodoData, provided, snapshot}) => {
  const[isEditing, setIsEditing] = useState(false)
  const[editedTitle, setEditedTitle] = useState(title)

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData)
  }


  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed
      }
      return data;
    })
    setTodoData(newTodoData)
  }

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value)
  }

  const handleSubmit = () => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.title = editedTitle;
      }
      return data;
    })

    setTodoData(newTodoData)
    setIsEditing(false)
  }

  if(isEditing) {
    return (
      <div className='bg-gray-100 items-center w-full px-4 py-1 my-2 text-gray-600  border rounded'>
        <form onSubmit={handleSubmit} className="flex justify-between">
          <input
            className='w-full px-3 py-2 mr-4 text-gray-500'
            value={editedTitle}
            onChange={handleEditChange}
            autoFocus
          />
          <div className='items-center flex'>
            <button 
              onSubmit={handleSubmit}
              className='float-right px-4 py-2'
              type='submit'>save</button>
            <button 
              className='float-right px-4 py-2'
              onClick={() => setIsEditing(false)}
              type="button"
            >X</button>
          </div>
        </form>
      </div>
    )
  } else {
    return (
      <div
        key={id}
        {...provided.draggableProps}
        ref={provided.innerRef}
        {...provided.dragHandleProps}
        className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center w-full justify-between px-4 py-1 my-2 text-gray-600  border rounded`}>
        <div className='items-center'>
          <input type="checkbox" defaultChecked={completed}
            onChange={() => handleCompleteChange(id)}
          />{" "}
          <span className={completed ? "line-through" : ""}>
            {title}
          </span>
        </div>
        <div className='items-center'>
          <button className='float-right px-4 py-2' onClick={() => handleClick(id)}>X</button>
          <button className='float-right px-4 py-2' onClick={() => setIsEditing(true)}>edit</button>
        </div>
      </div>
    )
  }
})

export default List
