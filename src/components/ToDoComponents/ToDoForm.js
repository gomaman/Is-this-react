import "./ToDoForm.css";
import React, { useState } from "react";

function ToDoForm({addToDoItem}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  function SubmitHandler(event) {
    event.preventDefault();

    const newToDoItem = {
      title,
      description,
      deadline,
    };

    addToDoItem(newToDoItem)

    setTitle("");
    setDescription("");
    setDeadline("");
  }

  return (
    <div className="todo-task-container">
      <h2>To Do Form</h2>
      <div className="todo-container">
        <form className="task-form" onSubmit={SubmitHandler}>
          <div className="task-checkbox task-input">
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

          <div className="task-checkbox task-input">
            <input
              name="deadline"
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