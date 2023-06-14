import './ToDoPage.css'
import ContainerGrid from '../../components/Containers/ContainerGrid'
import ToDoForm from '../../components/ToDoComponents/ToDoForm'
import ToDoList from '../../components/ToDoComponents/ToDoList'
import ToDoItem from '../../components/ToDoComponents/ToDoItem'
import { TODO_DATA } from '../../components/ToDoComponents/ToDoData'
import { useState } from 'react'


function ToDoPage() {

    const [newTODO_DATA, setToDo] = useState(TODO_DATA)
    

    const addNewItemHandler = (newToDoItem) => {
        setToDo([newToDoItem, ...newTODO_DATA]);
    };

    const changeStatusHandler = (small_id) => {
        const targetItemIndex = newTODO_DATA.findIndex((singleToDo) => singleToDo.small_id === small_id)

        console.log(targetItemIndex)

        setToDo(prevState => {
            const newState = [...prevState]
            const clickedToDo = newState[targetItemIndex]
            const updatedClickedToDo = {...clickedToDo}
            updatedClickedToDo.done = !updatedClickedToDo.done

            newState[targetItemIndex] = updatedClickedToDo

            return newState
        })
      }

    const removeItemById = (small_id) => {
        const targetItemIndex = newTODO_DATA.findIndex((singleToDo) => singleToDo.small_id === small_id)

        setToDo(prevState => {
            const newState = [...prevState]
            
            if (targetItemIndex !== -1) {
                newState.splice(targetItemIndex, 1);
              }
            
            return newState
        })
    }

    return (
        <section>
            <ContainerGrid>
                <ToDoForm
                    addNewItemHandler={addNewItemHandler}
                ></ToDoForm>
            </ContainerGrid>

            <ContainerGrid>
                {newTODO_DATA.map(({title, description, dateCreated, deadline, id, done, date, small_id}, index) => (
                    <ToDoItem
                        newTODO_DATA={newTODO_DATA}
                        title={title}
                        description={description}
                        dateCreated={dateCreated}
                        deadline={deadline}
                        id={id}
                        key={index}
                        done={done}
                        date={date}
                        small_id={small_id}
                        changeStatusHandler={changeStatusHandler}
                        removeItemById = {removeItemById}
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