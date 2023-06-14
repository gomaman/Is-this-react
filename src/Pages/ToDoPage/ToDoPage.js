import './ToDoPage.css'
import ContainerGrid from '../../components/Containers/ContainerGrid'
import ToDoForm from '../../components/ToDoComponents/ToDoForm'
import ToDoList from '../../components/ToDoComponents/ToDoList'
import ToDoItem from '../../components/ToDoComponents/ToDoItem'
import { TODO_DATA } from '../../components/ToDoComponents/ToDoData'
import { useState } from 'react'


function ToDoPage() {

    const [newTODO_DATA, setToDo] = useState(TODO_DATA)
    const [editToDo, setEditToDo] = useState(null)
    

    const addNewItemHandler = (toDo) => {
        if(editToDo) {
            const targetItemIndex = newTODO_DATA.findIndex((item) => item.small_id === editToDo.small_id);
            if (targetItemIndex !== -1) {
              setToDo((prevState) => {
                const newState = [...prevState];
                newState[targetItemIndex] = { ...newState[targetItemIndex], ...toDo };
                return newState;
              });
            }
            setEditToDo(null);
        } else {
            setToDo([toDo, ...newTODO_DATA]);
        }
    };

    const changeStatusHandler = (small_id) => {
        const targetItemIndex = newTODO_DATA.findIndex((singleToDo) => singleToDo.small_id === small_id)

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

    const editItemById = (small_id) => {
        const targetItem = newTODO_DATA.find((singleToDo) => singleToDo.small_id === small_id)
        setEditToDo(targetItem)
    }

    return (
        <section>
            <ContainerGrid>
                <ToDoForm
                    editData={editToDo}
                    addNewItemHandler={addNewItemHandler}
                ></ToDoForm>
            </ContainerGrid>

            <ContainerGrid>
                {newTODO_DATA.map(({title, description, dateCreated, deadline, id, done, date, small_id, editDate}, index) => (
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
                        editItemById = {editItemById}
                        editDate = {editDate}
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