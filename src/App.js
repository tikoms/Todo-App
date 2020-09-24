import React from 'react';
import TodoItem from "./TodoItem"
import todosData from "./todosData"


function App() {
    const todoDataComponents = todosData.map((todo) => {
        return ( <
            TodoItem key = {
                todo.id
            }
            todoItem = {
                todo
            }
            / >
        )
    })
    return ( <
        div className = "todo-list" > {
            todoDataComponents
        } <
        /div>


    );
}

export default App;