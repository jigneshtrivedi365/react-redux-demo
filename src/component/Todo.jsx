import React from "react";
import "../assets/style.css"
export const Todo = () => {
    return (
        <>
            <div className="todo-app">
                <header className="todo-header">
                <h1>My Todo List</h1>
                <input type="text" className="todo-input" placeholder="Add a new task..." />
                </header>
                <ul className="todo-list">
                <li className="todo-item">
                    <span>Learn CSS</span>
                    <button className="delete-btn">Delete</button>
                </li>
                <li className="todo-item completed">
                    <span>Build a Todo App</span>
                    <button className="delete-btn">Delete</button>
                </li>
                </ul>
                <footer className="todo-footer">
                <span>2 tasks remaining</span>
                <button className="clear-completed">Clear Completed</button>
                </footer>
            </div>
      
        </>
    );
}