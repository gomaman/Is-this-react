
import ProgramFilterFieldSet from "./ProgramFilterFieldSet"
import ProgramFormControlItem from "./ProgramFormControl"
import { PROGRAM_FILTER_DATA, PROGRAM_ITEMS_DATA } from "../../Config/Config"

const ProgramLength = PROGRAM_ITEMS_DATA.length

function ProgramFilter () {
    return (
      <div className="programs-filter">
        <form className="program-filter-form">

        <span className="programs-found">Rastos {ProgramLength} programos</span>

        {PROGRAM_FILTER_DATA.map((item, index) => (
          <ProgramFormControlItem
          key={index}
          data={item}
          ></ProgramFormControlItem>
        ))}

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