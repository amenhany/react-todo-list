import { useState } from "react";
import { List } from "@mui/joy";
import TodoItem from "./TodoItem";

const initialTodos = [
    { id: 1, text: "Finish React", completed: true },
    { id: 2, text: "Finish Python", completed: false },
    { id: 3, text: "Finish Next.js", completed: false }
]

export default function Todo() {
    const [todos, setTodos] = useState(initialTodos);

    function removeTodo(id) {
        setTodos(currentTodos => (
            currentTodos.filter(t => t.id !== id)
        ))
    }

    return (
        <List sx={{maxWidth: 360, margin: "0 auto"}}>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} remove={() => removeTodo(todo.id)}/>
            ))}
        </List>
    )
}