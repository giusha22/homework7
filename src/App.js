import React from 'react'
import AddTodo from './AddTodo'
import { TodoContextProvider } from './TodoContext'
import TodoListComponent from './TodoList'

const App = () => {
  return (
    <div>
      <TodoContextProvider>
        <AddTodo/>
        <TodoListComponent/>
      </TodoContextProvider>
    </div>
  )
}

export default App