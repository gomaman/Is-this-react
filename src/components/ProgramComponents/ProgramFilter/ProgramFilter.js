import ProgramFilterFieldSet from "./ProgramFilterFieldSet"
import ProgramFormControlItem from "./ProgramFormControl"

function ProgramFilter () {
  const PROGRAM_ITEMS_DATA = [
    {
      theme:"Tema",
      option1:"Visos",
      option2:"Programavimas",
      option3:"Dizainas"
    },

    {
      theme:"Vieta",
      option1:"Visos",
      option2:"Vilnius",
      option3:"Kaunas"
    },

    {
      theme:"Tipas",
      option1:"Visos",
      option2:"Programavimas",
      option3:"Dizainas"
    },
    
  ]

  let counter = 0 

    return (
      <div className="programs-filter">
        <form className="program-filter-form">
          {PROGRAM_ITEMS_DATA.map((program, index) => {
            counter = counter + 1
          })}

          <span className="programs-found">Rastos {counter} programos</span>

        {PROGRAM_ITEMS_DATA.map(({theme, option1, option2, option3}, index) => (
          <ProgramFormControlItem
          key={index}
          theme={theme}
          option1={option1}
          option2={option2}
          option3={option3}
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