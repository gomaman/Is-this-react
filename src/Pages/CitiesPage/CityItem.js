function CityItem({ name, population, continent, country, touristAttractions, isCapital, isLastInOdd, removeCity}) {

    function cityWrapper(text, text2) {
        return (
            <div className="city-attractions-wrapper">
            <h3 className="city-attractions">Main Tourist {text} of {name} {text2}:</h3>
            <ul className="attractions-list">
                {touristAttractions.map((attraction, index) => (
                    <li className="city-attraction-item" key={index}>{attraction}</li>
                ))}
            </ul>
        </div>
        )
    }

    const handleRemove = () => {
        removeCity(name);
    };

    const checkAttractions = () => {
        if(touristAttractions.length >= 2) {
            return (cityWrapper("attractions", "is"))
        } else if(touristAttractions.length === 1) {
            return (cityWrapper("attraction", "are"))
        }
    }

    return (
        <div className={`city-container ${isCapital ? 'capital' : ''} ${isLastInOdd ? 'last-odd' : ''}`}>
            <button className="remove-item" onClick={handleRemove}></button>
            <h2 className="city-name">{name} {isCapital && "(Capital)"}</h2>
            <p className="city-description">{name} city is located in {continent}, {country} has a population of {population} people.
                {isCapital && <span> {name} is the capital of {country}</span>}</p>

            {checkAttractions()}

        </div>
    )
}


export default CityItem