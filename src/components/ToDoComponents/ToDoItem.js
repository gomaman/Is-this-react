import { useState } from "react"
import "./ToDoItem.css"

function ToDoItem({deadline, description, title, small_id, date, newTODO_DATA, changeStatusHandler, done}) {

    const deadlineYear = Number(deadline.split("-")[0])
    const deadlineMonth = Number(deadline.split("-")[1])
    const deadlineDay = Number(deadline.split("-")[2])
    const currentDate = date

    const currentDateYear = Number(currentDate.split("-")[0])
    const currentDateMonth = Number(currentDate.split("-")[1])
    const currentDateDay = Number(currentDate.split("-")[2])
    

    let timeLeft = ""
    
    function removeItemById() {
      console.log(small_id)
      console.log(newTODO_DATA)
    }


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
                    <li><button onClick={() => removeItemById()}className="remove-object-button">Remove Task</button></li>
                    <li>Title: {title}</li>
                    <li>Description: {description}</li>
                    <li>Date Created: {date}</li>
                    <li>Deadline: {deadline}</li>
                    <li>Status: {done ? "Done" : "Not done"}  <input onChange={() => changeStatusHandler(small_id)} type="checkbox" checked={done} ></input></li>
                    <li>Time Left: {timeLeft} </li>
                </ul>
            </div>
        </div>
        )

    )
}

export default ToDoItem

// 