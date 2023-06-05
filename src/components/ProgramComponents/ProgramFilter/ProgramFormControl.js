function ProgramFormControlItem (props) {
  const {theme, option1, option2, option3} = props.data
    return (
      <div className="form-control">
      <label htmlFor="program-theme">{theme}</label>
      <select id="program-theme">
        <option>{option1}</option>
        <option>{option2}</option>
        <option>{option3}</option>
      </select>
    </div>
    )
    
}

export default ProgramFormControlItem