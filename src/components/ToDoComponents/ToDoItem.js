import { useState } from "react"
import "./ToDoItem.css"

function ToDoItem({editDate, deadline, description, title, small_id, date, newTODO_DATA, changeStatusHandler, done, removeItemById, editItemById}) {

    const deadlineYear = Number(deadline.split("-")[0])
    const deadlineMonth = Number(deadline.split("-")[1])
    const deadlineDay = Number(deadline.split("-")[2])
    const currentDate = date

    const currentDateYear = Number(currentDate.split("-")[0])
    const currentDateMonth = Number(currentDate.split("-")[1])
    const currentDateDay = Number(currentDate.split("-")[2])
    

    let timeLeft = ""
    

    if (deadlineYear > currentDateYear) {
        timeLeft = `${deadlineYear - currentDateYear} Year${deadlineYear - currentDateYear > 1 ? 's' : ''}`;
      } else if (deadlineMonth > currentDateMonth) {
        timeLeft = `${deadlineMonth - currentDateMonth} Month${deadlineMonth - currentDateMonth > 1 ? 's' : ''}`;
      } else if (deadlineDay > currentDateDay) {
        timeLeft = `${deadlineDay - currentDateDay} Day${deadlineDay - currentDateDay > 1 ? 's' : ''}`;
      } else {
        timeLeft = 'Task is due';
      }

    return (
        title && description && (
            <div className="todo-task-container">
            <h2>Task: {small_id}</h2>
            <div className="todo-container">
                <ul className="todo-item-list">
                    <li><button onClick={() => removeItemById(small_id)}className="remove-object-button">Remove Task</button></li>
                    <li><button onClick={() => editItemById(small_id)}className="remove-object-button">Edit Task</button></li>
                    <li>Title: {title}</li>
                    <li>Status: {done ? "Done" : "Not done"}  <input onChange={() => changeStatusHandler(small_id)} type="checkbox" checked={done} ></input></li>
                    <li>Description: {description}</li>
                    <li>Created: {date}</li>
                    <li>Deadline: {deadline}</li>
                    <li>Time Left: {timeLeft} </li>
                    <li> {editDate ? `Edited: ${editDate} ` : ''} </li>
                </ul>
            </div>
        </div>
        )

    )
}

export default ToDoItem

