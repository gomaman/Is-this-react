import "./ToDoForm.css"

function ToDoForm() {
    return (
        <div className="todo-task-container">
            <h2>To Do Form</h2>
            <div className="todo-container">
                <form className="task-form" >
                    <div className="task-checkbox task-input">
                        <input placeholder="Task Name"></input>
                    </div>

                    <div className="task-description-area task-input">
                        <textarea placeholder="Task Description"></textarea>
                    </div>

                    <div className="task-checkbox task-input">
                        <input placeholder="Task Deadline"></input>
                    </div>

                    <div className="task-button-container">
                        <input type="submit" value="Add a task" className="task-button"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ToDoForm