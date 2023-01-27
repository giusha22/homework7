import React, { useState } from 'react'
import { useTodoContext } from './TodoContext';

const AddTodo = () => {
  const [formValue,setFormValue]= useState({name: "", someProp: ""});
  const {addTodo} = useTodoContext();
  const onSubmit = (e)=>{
    e.preventDefault()
    addTodo({...formValue, id: new Date().toString()});
    setFormValue({name: "", someProp: ""})
  };

  const onInputChange = (e)=>{
    const {name,value} =e.target;
    setFormValue((prevValue)=>({...prevValue,[name]:value}))

  }
  return (
    
    <form onSubmit={onSubmit}>
      <input name='name' onChange={onInputChange} value={formValue.name} placeholder="name"/>
      <input name='someProp' onChange={onInputChange} value={formValue.someProp} placeholder= "someprop"/>
      <button>Add Todo</button>
    </form>
  )
}

export default AddTodo