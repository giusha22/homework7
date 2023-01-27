import { useTodoContext } from './TodoContext'
import TodoItem from './TodoItem';

const TodoListComponent = () => {
    const {todoList} =useTodoContext();
    console.log(todoList);
  return (
    <div>{todoList.map((item)=>{
        return <TodoItem key={item.id} {...item}/>
    })}</div>
  )
}

export default TodoListComponent