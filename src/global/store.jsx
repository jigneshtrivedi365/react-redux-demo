import {createStore} from 'redux'

/* eslint-disable no-case-declarations */
const initialState = { 
    task:[]
}
// constant declaretion 
const ADD_TASK = "task/add";
const DEL_TASK = "task/delete";

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task,action.payload],
            }

        case DEL_TASK:
            const updateTask = state.task.filter((task,index) => {
                return index !== action.payload;
            });
            return {
                ...state,
                task: [...state.task, updateTask],
            }
        default:
            return state;
    }
};

const addTask = (data) => {
    return {type:ADD_TASK,payload:data};
}

const delTask = (id) => {
    return {type:DEL_TASK,payload:id}; 
}

export const store = createStore(taskReducer)
console.log("Initial Store  :", store.getState());

store.dispatch(addTask("Hello world"))
store.dispatch(addTask("Buy now technical code"))
