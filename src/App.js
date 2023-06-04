import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import * as uuid from 'uuid';


const LOCAL_STORAGE_KEY = 'todoApp.todos';

function App() {
  // 'useState()' is local state.
  // 'todos' = 'TodoList' array.
  // 'setTodos' function to update 'todos'.
  const [todos, setTodos] = useState([]);
  // 'useRef()' lets us read user input.
  const todoNameRef = useRef();
  
  
  // Loads our state from storage.
  // '}, [])' so its only called once.
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // If storedTodos is not empty, then update current state todos
    if (storedTodos) setTodos(storedTodos)
  }, [])

  // Save current state to local storage.
  // '() =>' calls a function
  // '}, [todos]' pass 'todos' state
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }
    
  }, [todos])


  
  function handleAddTodo(e) {
    // get current value in 'input' field.
    const name = todoNameRef.current.value
    if (name === '') return

    setTodos(prevTodos => {
      // 'uuidv4()' function that creates a random 'id' value.
      return [...prevTodos, { id:uuid.v4(), name: name, complete: false}]
    })
    // After 'addTodo' button clicked, clear 'input' field.
    todoNameRef.current.value = null
  }


  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id)
    
    // Negate 'complete'
    todo.complete = !todo.complete;
    setTodos(newTodos);

  }


  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }


  return (
    <>
      {/*Render in 'TodoList.js's return element*/}
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left todo</div>
    </>
    )
}

export default App;
