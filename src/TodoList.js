import React from 'react';
import Todo from './Todo';

/**
 * 
 * @param {Array} todos "From 'App.js' 'useState()' 'todos'"
 * @returns 
 */
export default function TodoList({ todos, toggleTodo }) {
    return (
        todos.map( todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todoElement={todo} />
        })
    )

}