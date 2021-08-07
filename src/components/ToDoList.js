import { useEffect, useState } from "react";
import ToDoItem from './ToDoItem'

const ToDoList = ({isRefresh, setRefresh}) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        if (isRefresh) {
            // memanggil API untuk mengambil data todos
            fetch("http://localhost:8000/todos")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setRefresh(false)
                // ketika Rest API sukses, simpan data dari response ke dalam state lokal
                setTodos(data);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted.");
                }
            });
        }
    }, [isRefresh, setRefresh]);

    return (
        <ul id="todo-list">
            {todos.map((todo) => (
                <ToDoItem todo={todo} key={todo.id} setRefresh={setRefresh} />
            ))}
        </ul>
    )
}

export default ToDoList