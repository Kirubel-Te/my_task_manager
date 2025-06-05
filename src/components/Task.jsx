import { useState } from "react";


function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Buy groceries", completed: false },
        { id: 2, title: "Read a book", completed: true },
    ]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (!newTask.trim()) return;
            setTasks([
                ...tasks,
                { id: Date.now(), title: newTask.trim(), completed: false },
            ]);
            setNewTask("");
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="container">
            <h1>📝 Task List</h1>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Add new task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addTask()}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className={`task-item ${task.completed ? "completed" : ""}`}
                    >
                        <span onClick={() => toggleTask(task.id)}>{task.title}</span>
                        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                            🗑️
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;