function ProgramFilter () {
    
    return (
        <div className="programs-filter">
        <form className="program-filter-form">
          <span className="programs-found">Rastos 55 programos</span>

          <div className="form-control">
            <label htmlFor="program-theme">Tema</label>
            <select id="program-theme">
              <option>Visos</option>
              <option>Programavimas</option>
              <option>Dizainas</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="program-location">Vieta</label>
            <select id="program-location">
              <option>Visos</option>
              <option>Vilnius</option>
              <option>Kaunas</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="program-type">Tipas</label>
            <select id="program-type">
              <option>Visos</option>
              <option>Programavimas</option>
              <option>Dizainas</option>
            </select>
          </div>

          <fieldset className="checkbox-wrapper">
            <legend>Laikas</legend>

            <div className="checkbox-control">
              <input type="checkbox" id="time-checkbox-day"/>
              <label htmlFor="time-checkbox-day">Dienomis</label>
            </div>
            
            <div className="checkbox-control">
              <input type="checkbox" id="time-checkbox-evening"/>
              <label htmlFor="time-checkbox-evening">Vakarais</label>
            </div>
          </fieldset>
        </form>
      </div>
    )
    
}

export default ProgramFilter