import React, { useState } from "react";
import "../assets/style.css"
import { useDispatch, useSelector } from "react-redux";
import { addTask, clearAllTask, delTask, fetchTask } from "../global/store";
export const Todo = () => {

    const state = useSelector((state) => state)
    const tasks = state.taskReducer.task;
    const dispatch = useDispatch();
    const [taskData,setTask] = useState(""); 
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(taskData)) 
        return setTask("")
    }
    const handleDeleteTask = (id) => {
        return dispatch(delTask(id))
    }

    const handleFetchTask = () => {
        dispatch(fetchTask())
    }
    const clearAllTaskHandler = () => {
        dispatch(clearAllTask())
    }

    return (
        <>
            <div className="todo-app">
                <header className="todo-header">
                    <h1>My Todo List</h1>
                    <form onSubmit={handleFormSubmit}>
                        <div className="header-body">
                            <input type="text" 
                                className="todo-input" 
                                placeholder="Add a new task..." 
                                value={taskData}
                                onChange={(e)=>setTask(e.target.value)}
                            />
                            <button className="btn-add-task">Add Task</button>
                        </div>
                    </form>
                    <br/>
                    {/* <button className="btn-fetch" onClick={handleFetchTask}>Fetch Task</button> */}
                </header>
                <ul className="todo-list">
                    {
                        tasks?.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
                            </li>     
                        })
                    }
                </ul>
                <footer className="todo-footer">
                    <button className="clear-completed" onClick={()=>clearAllTaskHandler()}>Clear Completed</button>
                </footer>
            </div>
        </>
    );
}