import React, {useState} from 'react'
import Todo from './Todo.jsx';
import TodoForm from "./TodoForm.jsx";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo =>{

    const newTodos = [todo, ...todos];

    setTodos(newTodos)
    console.log(...todos)
    console.log(todos.length)
  }

  const removeTodo = id =>{
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr)
  }

  return (
    <div className='container w-50'>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} removeTodo={removeTodo}/>
      
      <div className='text-start text-secondary border-bottom border-primary pt-4 m-2'>{todos.length == 0 ? "No tasks, add a task" : todos.length + " " + "item left"}</div>
    </div>
  )
}

export default TodoList