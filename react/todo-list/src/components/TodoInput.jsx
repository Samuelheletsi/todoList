import React, { useState } from 'react'

export default function TodoInput(props) {
    const {addTodo,todoValue,setTodoValue} = props;


  return (
    <div className='todoInput'>
      <input value={todoValue} onChange={(e)=>{setTodoValue(e.target.value)}} type="text" placeholder='Enter a todo list' />
      <button onClick={()=>{
        addTodo(todoValue);
        setTodoValue('')
      }}>Add</button>
    </div>
  )
}
