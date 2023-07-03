import { createContext, useContext, useEffect, useState } from "react"
import { v4 } from "uuid"

const TasksContext = createContext()

export const useTasksContext = () => useContext(TasksContext)

const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleAddNewTask = () => {
        setTasks([...tasks, {
            id: v4(),
            title: "Nova Task",
            description: "detalhando a nova task",
            done: false
        }])
    }

    return (
        <TasksContext.Provider value={{ tasks, setTasks, handleAddNewTask }}>
            {children}
        </TasksContext.Provider>
    )
}

export default TasksProvider;