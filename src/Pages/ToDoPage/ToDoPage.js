import './ToDoPage.css'
import ContainerGrid from '../../components/Containers/ContainerGrid'
import ToDoForm from '../../components/ToDoComponents/ToDoForm'
import ToDoList from '../../components/ToDoComponents/ToDoList'
import ToDoItem from '../../components/ToDoComponents/ToDoItem'
import { TODO_DATA } from '../../components/ToDoComponents/ToDoData'
import { useState } from 'react'

function ToDoPage() {

    const [newTODO_DATA, setToDo] = useState(TODO_DATA)

    const addToDoItem = (newToDoItem) => {
        setToDo([newToDoItem, ...newTODO_DATA]);
    };

    return (
        <section>
            <ContainerGrid>
                <ToDoForm
                    addToDoItem={addToDoItem}
                ></ToDoForm>
            </ContainerGrid>

            <ContainerGrid>
                {newTODO_DATA.map((task, index) => (
                    <ToDoItem
                        dateCreated={task.dateCreated}
                        deadline={task.deadline}
                        description={task.description}
                        doneStatus={task.doneStatus}
                        id={task.id}
                        title={task.title}
                        key={index}
                    ></ToDoItem>
                ))}
            </ContainerGrid>

            <ContainerGrid>
                {newTODO_DATA.length > 0 && (
                    <div className="todo-task-container">
                        <h2>Tasks List</h2>
                        <div className="todo-container">
                            <ul>
                                {newTODO_DATA.map((task, index) => (
                                    <ToDoList
                                        key={index}
                                        title={task.title}
                                    ></ToDoList>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </ContainerGrid>
        </section>
    )
}



export default ToDoPage