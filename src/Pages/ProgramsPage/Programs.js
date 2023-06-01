import './Programs.css';
import Banner from '../../components/ProgramComponents/Banner/Banner';
import ProgramFilter from '../../components/ProgramComponents/ProgramFilter/ProgramFilter';
import ProgramList from '../../components/ProgramComponents/ProgramList/ProgramList';

function Programs() {

    return (
        <div className="container">
        <h1>Programos</h1>
        <Banner></Banner>
        <div className="content-wrapper">
        <ProgramFilter></ProgramFilter>
        <ProgramList></ProgramList>
        </div>
        
      </div>
    )

}


export default Programs