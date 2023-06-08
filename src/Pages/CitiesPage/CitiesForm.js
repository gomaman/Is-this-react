function CitiesForm() {

    return (
        <div className="form-container">
            <form className="city-form">
                <div className="capital-checkbox">
                    <label htmlFor="Capital">Capital</label>
                    <input type="checkbox"  name="Capital"></input>
                </div>
                <div className="city-input">
                    <input type="text" id="cityName" name="cityName" placeholder="City Name"></input>
                </div>
                <div className="city-input">
                    <input type="number" id="population" name="population" placeholder="Population"></input>
                </div>
                <div className="city-input">
                    <input type="text" id="continent" name="continent" placeholder="Continent"></input>
                </div>
                <div className="city-input">
                    <input type="text" id="country" name="country" placeholder="Country"></input>
                </div>
                <div className="city-input-area">
                    <textarea type="text" id="attractions" name="attractions" placeholder="Tourist Attractions"></textarea>
                </div>
                <div>
                    <input type="submit" value="Add a city"></input>
                </div>
            </form>
        </div>
    )
}


export default CitiesForm