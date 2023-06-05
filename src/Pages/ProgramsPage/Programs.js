import './Programs.css';
import Container from '../../components/Containers/Container';
import Banner from '../../components/ProgramComponents/Banner/Banner';
import ProgramFilter from '../../components/ProgramComponents/ProgramFilter/ProgramFilter';
import ProgramList from '../../components/ProgramComponents/ProgramList/ProgramList';


function Programs() {
  
    return (        
      <Container className="container">
        <h1>Programos</h1>
        <Banner
        title="Nežinai ką pasirinkti?"
        action="Spręsk IT testą"
        ></Banner>
        <div className="programs-content-wrapper">
        <ProgramFilter></ProgramFilter>
        <ProgramList></ProgramList>
        </div>
      </Container>
    )

}


export default Programs