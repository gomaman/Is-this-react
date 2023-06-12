import "./ToDoForm.css"

function ToDoList(props) {
    return (
        props.title && (
            <li>{props.title}</li>
        )

    )
}

export default ToDoList