import { createContext, useContext, useState } from "react"

const TodoContext = createContext()

export const useTodoContext = () => useContext(TodoContext)

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([])

    return (
        <TodoContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;