import React from "react";
import "../assets/style.css"
import { useSelector } from "react-redux";
export const Todo = () => {

    const state = useSelector((state) => state)
    const tasks = state.task;
    return (
        <>
            <div className="todo-app">
                <header className="todo-header">
                    <h1>My Todo List</h1>
                    <input type="text" className="todo-input" placeholder="Add a new task..." />
                </header>
                <ul className="todo-list">
                    {
                        tasks.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="delete-btn">Delete</button>
                            </li>     
                        })
                    }
                </ul>
                <footer className="todo-footer">
                    <span>2 tasks remaining</span>
                    <button className="clear-completed">Clear Completed</button>
                </footer>
            </div>
        </>
    );
}