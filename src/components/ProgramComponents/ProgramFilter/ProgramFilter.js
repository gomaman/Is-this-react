import ProgramFilterFieldSet from "./ProgramFilterFieldSet"
import ProgramFormControlItem from "./ProgramFormControl"

function ProgramFilter () {
    
    return (
      <div className="programs-filter">
        <form className="program-filter-form">
          
          <span className="programs-found">Rastos 55 programos</span>

          <ProgramFormControlItem
          theme="Tema"
          option1="Visos"
          option2="Programavimas"
          option3="Dizainas"
          ></ProgramFormControlItem>

          <ProgramFormControlItem
          theme="Vieta"
          option1="Visos"
          option2="Vilnius"
          option3="Kaunas"
          ></ProgramFormControlItem>

          <ProgramFormControlItem
          theme="Tipas"
          option1="Visos"
          option2="Programavimas"
          option3="Dizainas"
          ></ProgramFormControlItem>

          <ProgramFilterFieldSet
          legend="Laikas"
          timeOption="Dienomis"
          timeOption2="Vakarais"
          ></ProgramFilterFieldSet>

           </form>
      </div>
    )
    
}

export default ProgramFilter