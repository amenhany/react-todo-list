import { useState, useEffect } from "react";
import { List } from "@mui/joy";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";


function getInitialData() {
    const data = JSON.parse(localStorage.getItem("todos"));
    return data ? data : [];
}

export default function Todo() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    function removeTodo(id) {
        setTodos(currentTodos => (
            currentTodos.filter(t => t.id !== id)
        ))
    }

    function toggleTodo(id) {
        setTodos(currentTodos => (
            currentTodos.map(todo => {
                if (todo.id === id)
                    return { ...todo, completed: !todo.completed };
                else return todo;
            })
        ))
    }

    function editTodo(newText, id) {
        setTodos(currentTodos => (
            currentTodos.map(todo => {
                if (todo.id === id)
                    return { ...todo, text: newText };
                else return todo;
            })
        ))
    }

    function addTodo(text) {
        setTodos(currentTodos => ([
            ...currentTodos,
            { id: crypto.randomUUID(), text: text, completed: false }
        ]))
    }

    return (
        <List sx={{maxWidth: 360, margin: "0 auto"}}>
            <TodoForm add={addTodo} />

            {todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    remove={() => removeTodo(todo.id)}
                    toggle={() => toggleTodo(todo.id)}
                    edit={editTodo}
                />
            ))}
        </List>
    )
}