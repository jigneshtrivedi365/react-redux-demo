import { composeWithDevTools } from '@redux-devtools/extension';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import {applyMiddleware, createStore} from 'redux'
import { thunk } from 'redux-thunk';

/* eslint-disable no-case-declarations */
const initialState = { 
    task:[]
}
// constant declaretion 
const ADD_TASK = "task/add";
const DEL_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

/* Make reducer in treditional method */

// const taskReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_TASK:
//             return {
//                 ...state,
//                 task: [...state.task,action.payload],
//             }

//         case DEL_TASK:
//             const updateTask = state.task.filter((_,index) => {
//                 return index !== action.payload;
//             });
//             return {
//                 ...state,
//                 task: updateTask,
//             }

//         case FETCH_TASK:
//             return {
//                 ...state,
//                 task: [...state.task,... action.payload],
//             }

//         default:
//             return state;
//     }
// };

/* Make action creator in treditional method */

// export const addTask = (data) => {
//     return {type:ADD_TASK,payload:data};
// }

// export const delTask = (id) => {
//     return {type:DEL_TASK,payload:id}; 
// }

export const fetchTask = () => {
    return async (dispatch) => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
            const task = await res.json()
            dispatch({type:FETCH_TASK,payload:task.map((curTask) => curTask.title)})
        } catch (error) {
            console.log(error);
        }
    }
}

/* Treditional Practise Method */
// export const store = createStore(
//     taskReducer,
//     composeWithDevTools( applyMiddleware(thunk) )
// )


/* Make a reducer in using by toolkit*/

const taskReducer = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask(state,action){
            state.task.push(action.payload)
        },
        delTask(state,action){
            state.task = state.task.filter(
                (curTask, index) => index !== action.payload
            )
        },
        clearAllTask(state,action){
            console.log(state.task);
            return {
                ...state,
                task: [],
            }
        }
    }
})

export const {addTask,delTask,clearAllTask}  = taskReducer.actions;

/* create store using tool kit*/
export const store = configureStore({
    reducer:{
        taskReducer: taskReducer.reducer
    }
})

console.log(store.dispatch(addTask("Buy Mango")))
console.log(store.getState())