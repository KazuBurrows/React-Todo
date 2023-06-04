import React from 'react';


/**
 * 
 * @param {} todoElement "From 'TodoList.js' 'todos.map( todo => {'"
 * @returns 
 */
export default function Todo({ todoElement, toggleTodo }) {

    function handleTodoClick() {
        toggleTodo(todoElement.id)
    }

    return (
        // <div id={todoElement.id}>
        <div>
            <label>
                <input type="checkbox" checked={todoElement.complete} onChange={handleTodoClick} />
                {todoElement.name}
            </label>
            
        </div>
    )

}