import './ToDoPage.css'
import ContainerGrid from '../../components/Containers/ContainerGrid'
import ToDoForm from '../../components/ToDoComponents/ToDoForm'
import ToDoList from '../../components/ToDoComponents/ToDoList'
import ToDoItem from '../../components/ToDoComponents/ToDoItem'

function ToDoPage() {
    return (

        <ContainerGrid>
            <ToDoForm></ToDoForm>            
            <ToDoItem></ToDoItem>
            <ToDoList></ToDoList>

        </ContainerGrid>
    )
}



export default ToDoPage