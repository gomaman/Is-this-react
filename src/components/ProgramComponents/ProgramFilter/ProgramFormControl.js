function ProgramFormControlItem (props) {
    return (
      <div className="form-control">
      <label htmlFor="program-theme">{props.theme}</label>
      <select id="program-theme">
        <option>{props.option1}</option>
        <option>{props.option2}</option>
        <option>{props.option3}</option>
      </select>
    </div>
    )
    
}

export default ProgramFormControlItem