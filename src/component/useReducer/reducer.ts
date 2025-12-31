import { ACTIONS } from "./action";

// init state
export const initialState = 0;
//reducer function
export const reducer = (state, action) => {
    console.log('reducer is called');
    switch (action) {
        case ACTIONS.INCREMENT:
            return state + 1;
        case ACTIONS.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

//Todo app
export const taskState = {
    task: 'Learn React',
    tasks: []
};

// const setInput = (payload) => {
//     return { type: ACTION_UPDATE_INPUT, payload: payload };
// }

export const todoReducer = (taskState, action) => {
    let newTasks ;
    switch (action.type) {
        case ACTIONS.UPDATE_INPUT:
            console.log('update input', action.payload);
            newTasks =  { ...taskState, task: action.payload };
            break;
        case ACTIONS.ADD_TASK:
            console.log('add task', action.payload);
            newTasks = { ...taskState, tasks: [...taskState.tasks, action.payload] };
              break;
        case ACTIONS.REMOVE_TASK:
            console.log('remove task', action.payload);
            newTasks = { ...taskState, tasks: taskState.tasks.filter((_, index) => index !== action.payload) };
              break;
        default:
            newTasks = taskState;
        
    }
    return newTasks;

}