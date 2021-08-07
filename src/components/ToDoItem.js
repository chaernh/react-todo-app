const ToDoItem = ({setRefresh, todo}) => {

    const update = () => {
        todo.done = !todo.done

        fetch("http://localhost:8000/todos/" + todo.id, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        }).then(() => {
            console.log('todo updated.')
            setRefresh(true)
        })
    }

    const deleteTodo = () => {
        fetch("http://localhost:8000/todos/" + todo.id, {
            method: "DELETE",
        }).then(() => {
            console.log('todo deleted.')
            setRefresh(true);
        });
    };
    return (
        <li className={`${todo.done ? "checked" : ""}`}>
            <div onClick={update}>{todo.title}</div> 
            <span className="close" onClick={deleteTodo}>x</span>
        </li>
    )
}

export default ToDoItem