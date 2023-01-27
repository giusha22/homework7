import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

export const useTodoContext =()=>useContext(TodoContext);

export const TodoContextProvider = ({children})=>{
    const [todoList,setTodoList] = useState([]);
    const [selectedTodo,setSelectedTodo] =useState({
        name:"",
        someProp:"",
        id:"",
    })

    const addTodo = (todo)=>{
        setTodoList((prevTodoList)=>[...prevTodoList, todo])
    }
    const deleteTodo = (itemId)=>{
        setTodoList((prevTodoList)=>prevTodoList.filter(({id}) => id !== itemId  ))
    }
    const editTodo = (todo)=>{
        setSelectedTodo(todo)
    }
    console.log("selected",setSelectedTodo);
    return <TodoContext.Provider value={{
        todoList,
        setTodoList,
        addTodo,
        deleteTodo,
        editTodo,
         selectedTodo,
         setSelectedTodo,
         }}>
        {children}
    </TodoContext.Provider>
}