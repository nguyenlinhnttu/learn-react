import { useState } from "react";

function TodoList() {
    // init 1 lan duy nhat tu localStorage
    const [tasks, setTasks] = useState<string[]>(() => {
        const localTasks = localStorage.getItem("tasks");
        const initialTasks = localTasks ? JSON.parse(localTasks) as string[] : [];
        console.log("Initial Tasks:", initialTasks);
        return initialTasks;
    }); // State to hold the list of tasks
    const [input, setInput] = useState<string>(""); // State to hold the current input value

    function handleAddTask() {
        if (input.trim() !== "") {
            setTasks(prev => {
                var newTasks = [...tasks, input.trim()];
                localStorage.setItem("tasks", JSON.stringify(newTasks));
                return newTasks
            }
            ); // Add new task to the list
            setInput(""); // Clear the input field
        }
    }

    function handleDeleteTask(index: number) {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    return (
        <div>
            <h2>Todo List</h2>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task} <button onClick={() => {
                        handleDeleteTask(index);
                    }}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => {
                handleAddTask();
            }}>Add Task</button>
        </div>
    );
}

export default TodoList;