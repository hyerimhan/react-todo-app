import React from 'react'

const List = ({ id, title, completed, todoData, setTodoData, provided, snapshot}) => {

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


  return (
    <div>
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
          <button onClick={() => handleClick(id)}>X</button>
        </div>
      </div>
    </div>
  )
}

export default List
