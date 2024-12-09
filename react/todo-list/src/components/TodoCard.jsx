import React from 'react'

export default function TodoCard(props) {
   const {children,handleDelete,index, handleEdit} = props;

  return (
    <div className='todoCard'>
      {children}
       <div>
       <button onClick={()=>{
        handleEdit(index);
       }} >
         <li>Edit</li>
       </button>
        <button onClick={()=>{
          handleDelete(index);
        }}>
          <li>Delete</li>
          </button>
       </div>
    </div>
  )
}
