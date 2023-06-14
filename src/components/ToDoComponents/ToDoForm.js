import "./ToDoForm.css";
import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function ToDoForm({addNewItemHandler}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()} ${current.getHours()}:${current.getMinutes()}`;
  const unique_id = uuid()
  const small_id = unique_id.slice(0,5)
  const done = false

  function SubmitHandler(event) {
    event.preventDefault();

    const newToDoItem = {
      title,
      description,
      date,
      small_id,
      deadline,
      done,
    };

    addNewItemHandler(newToDoItem)

    setTitle("");
    setDescription("");
    setDeadline("");
    // setIsDone(false)
  }


  return (
    <div className="todo-task-container">
      <h2>To Do Form</h2>
      <div className="todo-container">
        <form className="task-form" onSubmit={SubmitHandler}>
          <div className="task-input">
            <input
              name="title"
              placeholder="Task Name"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            ></input>
          </div>

          <div className="task-description-area task-input">
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              type="text"
              name="description"
              placeholder="Task Description"
            ></textarea>
          </div>

          <div className="task-input">
            <input
              name="deadline"
              type="date"
              placeholder="Task Deadline"
              value={deadline}
              onChange={(event) => setDeadline(event.target.value)}
            ></input>
          </div>


          <div className="task-button-container">
            <input
              type="submit"
              value="Add a task"
              className="task-button"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToDoForm;