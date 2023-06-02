function ProgramFilterFieldSet(props) {
  return (
    <fieldset className="checkbox-wrapper">
      <legend>{props.legend}</legend>

      <div className="checkbox-control">
        <input type="checkbox" id="time-checkbox-day" />
        <label htmlFor="time-checkbox-day">{props.timeOption}</label>
      </div>

      <div className="checkbox-control">
        <input type="checkbox" id="time-checkbox-evening" />
        <label htmlFor="time-checkbox-evening">{props.timeOption2}</label>
      </div>
    </fieldset>
  )
}

export default ProgramFilterFieldSet