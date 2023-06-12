import "./ToDoItem.css"
import { v4 as uuid } from 'uuid';

function ToDoItem({deadline, description, doneStatus, title}) {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const unique_id = uuid()
    const small_id = unique_id.slice(0,5)

    return (
        <div className="todo-task-container">
            <h2>Task: {small_id}</h2>
            <div className="todo-container">
                <ul>
                    <li>Title: {title}</li>
                    <li>Description: {description}</li>
                    <li>Date Created: {date}</li>
                    <li>Deadline: {deadline}</li>
                    <li>Status: {doneStatus ? "Done" : "Not done"}</li>
                </ul>
            </div>
        </div>
    )
}



export default ToDoItem

