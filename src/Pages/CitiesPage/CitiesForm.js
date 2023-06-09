import { useState } from "react"
import { citiesData } from "./CitiesData"

function CitiesForm({addCity}) {
    const [isCapital, setIsCapital] = useState(false)
    const [cityName, setCityName] = useState('')
    const [population, setPopulation] = useState('')
    const [continent, setContinent] = useState('')
    const [country, setCountry] = useState('')
    const [attractions, setAttractions] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

    const attractionsArr = attractions.split(',')

    const newCityItem = {
        name: cityName,
        population: parseInt(population),
        location: {
            continent,
            country
        },
        touristAttractions: attractionsArr,
        isCapital
    }

    addCity(newCityItem)

    event.target.reset();

    setIsCapital(false);
    };

    return (
        <div className="form-container">
            <form className="city-form" onSubmit={handleSubmit}>
                <div className="capital-checkbox">
                    <label htmlFor="Capital">Capital</label>
                    <input value={isCapital} onClick={(event) => setIsCapital(event.target.checked)}type="checkbox" name="Capital"></input>
                </div>
                <div className="city-input">
                    <input value={cityName} onChange={(event) => setCityName(event.target.value)} type="text" id="cityName" name="cityName" placeholder="City Name"></input>
                </div>
                <div className="city-input">
                    <input value={population} onChange={(event) => setPopulation(event.target.value) }  type="number" id="population" name="population" placeholder="Population"></input>
                </div>
                <div className="city-input">
                    <input value={continent} onChange={(event) => setContinent(event.target.value)}  type="text" id="continent" name="continent" placeholder="Continent"></input>
                </div>
                <div className="city-input">
                    <input value={country} onChange={(event) =>setCountry(event.target.value)}  type="text" id="country" name="country" placeholder="Country"></input>
                </div>
                <div className="city-input-area">
                    <textarea value={attractions} onChange={(event) => setAttractions(event.target.value)}  type="text" id="attractions" name="attractions" placeholder="Tourist Attractions"></textarea>
                </div>
                <div>
                    <input type="submit" value="Add a city"></input>
                </div>
            </form>
        </div>
    )
}

export default CitiesForm