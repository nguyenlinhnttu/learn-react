import { useState, useReducer } from "react";

// useState
// 1. init state 
// 2. Action + -

// cach su dung  useReducer 
// 1. define initstate 
// 2. define Actions
// 3. reducer function
// 4. dispatch


// init state
const initialState = 0;
// actions
const ACTION_INCREMENT = 'increment';
const ACTION_DECREMENT = 'decrement';
//reducer function
const reducer = (state, action) => {
    console.log('reducer is called');
    switch (action) {
        case ACTION_INCREMENT:
            return state + 1;
        case ACTION_DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

//Todo app

const taskState = {
    task: 'Learn React',
    tasks: []
};
const ACTION_UPDATE_INPUT = 'update-input';
const ACTION_ADD_TASK = 'add-task';
const ACTION_REMOVE_TASK = 'remove-task';

// const setInput = (payload) => {
//     return { type: ACTION_UPDATE_INPUT, payload: payload };
// }

const todoReducer = (taskState, action) => {
    let newTasks ;
    switch (action.type) {
        case ACTION_UPDATE_INPUT:
            console.log('update input', action.payload);
            newTasks =  { ...taskState, task: action.payload };
            break;
        case ACTION_ADD_TASK:
            console.log('add task', action.payload);
            newTasks = { ...taskState, tasks: [...taskState.tasks, action.payload] };
              break;
        case ACTION_REMOVE_TASK:
            console.log('remove task', action.payload);
            newTasks = { ...taskState, tasks: taskState.tasks.filter((_, index) => index !== action.payload) };
              break;
        default:
            newTasks = taskState;
        
    }
    return newTasks;

}


function DemoUseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [tasks, dispatchTask] = useReducer(todoReducer, taskState);

    const handleAddTask =(value) =>{
        dispatchTask({ type: ACTION_ADD_TASK, payload: value })
        dispatchTask({ type: ACTION_UPDATE_INPUT, payload: '' })
    }

    const handleDeleteTask = (index) =>{
        dispatchTask({ type: ACTION_REMOVE_TASK, payload: index })
        dispatchTask({ type: ACTION_UPDATE_INPUT, payload: '' })
    }

    return (
        <div>
            <h1>Demo useReducer Count</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch(ACTION_INCREMENT)}>Increment</button>
            <button onClick={() => dispatch(ACTION_DECREMENT)}>Decrement</button>

            <h1>Demo useReducer TODO</h1>

            {/* <input type="text" value={tasks.task}
                onChange={(e) => dispatchTask(setInput(e.target.value))}
                placeholder="Enter todo item" /> */}

            <input type="text" value={tasks.task}
                onChange={(e) => dispatchTask({type : ACTION_UPDATE_INPUT, payload: e.target.value})}
                placeholder="Enter todo item" />


            <button onClick={() => handleAddTask(tasks.task)}>Add Todo</button>
            <ul>
                {
                    tasks.tasks.map((item, index) => (
                        <li key={index}>{item} 
                        <button onClick={() => handleDeleteTask(index)}>Remove</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DemoUseReducer;