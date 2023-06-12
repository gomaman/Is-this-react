import "./ToDoItem.css"
import { v4 as uuid } from 'uuid';

function ToDoItem({deadline, description, isDone, title, small_id, date}) {

    const deadlineYear = Number(deadline.split("-")[0])
    const deadlineMonth = Number(deadline.split("-")[1])
    const deadlineDay = Number(deadline.split("-")[2])
    const currentDate = date

    const currentDateYear = Number(currentDate.split("-")[0])
    const currentDateMonth = Number(currentDate.split("-")[1])
    const currentDateDay = Number(currentDate.split("-")[2])


    let timeLeft = ""

    if(deadlineYear > currentDateYear) {
        timeLeft = `${deadlineYear - currentDateYear} Year`
    }   else if (deadlineMonth > currentDateMonth) {
        timeLeft = `${deadlineMonth - currentDateMonth} Month`
    }   else if (deadlineDay > currentDateDay) {
        timeLeft = `${deadlineDay - currentDateDay} Day`
    }   else {
        timeLeft = `Task is due`
    }

    return (
        title && description && (
            <div className="todo-task-container">
            <h2>Task: {small_id}</h2>
            <div className="todo-container">
                <ul>
                    <li>Title: {title}</li>
                    <li>Description: {description}</li>
                    <li>Date Created: {date}</li>
                    <li>Deadline: {deadline}</li>
                    <li>Status: {isDone ? "Done" : "Not done"}</li>
                    <li>Time Left: {timeLeft} </li>
                </ul>
            </div>
        </div>
        )

    )
}



export default ToDoItem

