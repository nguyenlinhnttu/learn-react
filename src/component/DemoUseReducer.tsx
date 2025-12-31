import { useState, useReducer, useRef } from "react";
import { ACTIONS } from "./useReducer/action";
import { reducer, initialState, todoReducer, taskState } from "./useReducer/reducer";

// useState
// 1. init state 
// 2. Action + -

// cach su dung  useReducer 
// 1. define initstate 
// 2. define Actions
// 3. reducer function
// 4. dispatch



function DemoUseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [tasks, dispatchTask] = useReducer(todoReducer, taskState);

    const inputRef = useRef(null);

    const handleAddTask =(value) =>{
        dispatchTask({ type: ACTIONS.ADD_TASK, payload: value })
        dispatchTask({ type: ACTIONS.UPDATE_INPUT, payload: '' })
        inputRef?.current?.focus();
    }

    const handleDeleteTask = (index) =>{
        dispatchTask({ type: ACTIONS.REMOVE_TASK, payload: index })
        dispatchTask({ type: ACTIONS.UPDATE_INPUT, payload: '' })
           inputRef?.current?.focus();
    }
    
    
    return (
        <div>
            <h1>Demo useReducer Count</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch(ACTIONS.INCREMENT)}>Increment</button>
            <button onClick={() => dispatch(ACTIONS.DECREMENT)}>Decrement</button>

            <h1>Demo useReducer TODO</h1>

            {/* <input type="text" value={tasks.task}
                onChange={(e) => dispatchTask(setInput(e.target.value))}
                placeholder="Enter todo item" /> */}

            <input 
                ref ={inputRef}
                type="text" value={tasks.task}
                onChange={(e) => dispatchTask({type : ACTIONS.UPDATE_INPUT, payload: e.target.value})}
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