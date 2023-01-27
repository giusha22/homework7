import React from 'react'
import { useTodoContext } from './TodoContext'

const TodoItem = ({name,id,someProp}) => {
  const {deleteTodo,editTodo}= useTodoContext();
  return (   
    <div style={{display : 'flex'}}>
      <h1>{name} </h1>
      <h2>{someProp} </h2>
      <button onClick={()=>{
        editTodo({name, id , someProp})
      }}>edit</button>
      <button onClick={()=>deleteTodo(id)}>delete</button>
    </div>
  )
}

export default TodoItem