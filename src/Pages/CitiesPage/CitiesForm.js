import { useState } from "react"
import { citiesData } from "./CitiesData"

function CitiesForm({ addCity }) {
    const [isCapital, setIsCapital] = useState('')
    const [cityName, setCityName] = useState('')
    const [population, setPopulation] = useState('')
    const [continent, setContinent] = useState('')
    const [country, setCountry] = useState('')
    const [attractions, setAttractions] = useState('')
    const [features, setFeatures] = useState('')

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
        setContinent(false)

    };

    return (
        <div className="form-container">
            <form className="city-form" onSubmit={handleSubmit}>
                <div className="capital-checkbox">
                    <label htmlFor="Capital">Capital</label>
                    <input value={isCapital} onClick={(event) => setIsCapital(event.target.checked)}
                        type="checkbox"
                        name="Capital"></input>
                </div>
                <div className="city-input">
                    <input value={cityName} onChange={(event) => setCityName(event.target.value)}
                        type="text" id="cityName"
                        name="cityName"
                        placeholder="City Name"></input>
                </div>
                <div className="city-input">
                    <input value={population} onChange={(event) => setPopulation(event.target.value)}
                        type="number"
                        id="population"
                        name="population"
                        placeholder="Population"></input>
                </div>

                <div className="city-radio-input">

                    <div className="radio-input-wrap">
                        <input onChange={(event) => setContinent(event.target.value)}
                            type="radio"
                            id="Africa"
                            name="continent"
                            value="Africa" checked={continent === "Africa"}></input>
                        <label htmlFor="Africa">Africa</label>
                    </div>
                    <div className="radio-input-wrap">
                        <input onChange={(event) => setContinent(event.target.value)}
                            type="radio"
                            id="Europe"
                            name="continent"
                            value="Europe"
                            checked={continent === "Europe"}></input>
                        <label htmlFor="Europe">Europe</label>
                    </div>
                    <div className="radio-input-wrap">
                        <input onChange={(event) => setContinent(event.target.value)}
                            type="radio"
                            id="Asia"
                            name="continent"
                            value="Asia" checked={continent === "Asia"}></input>
                        <label htmlFor="Asia">Asia</label>
                    </div>
                    <div className="radio-input-wrap">
                        <input onChange={(event) => setContinent(event.target.value)}
                            type="radio"
                            id="North America"
                            name="continent"
                            value="North America" checked={continent === "North America"}></input>
                        <label htmlFor="North America">North America</label>
                    </div>

                    {/* <input value={continent} onChange={(event) => setContinent(event.target.value)}  type="text" id="continent" name="continent" placeholder="Continent"></input> */}
                </div>
                <div className="city-input">
                    <input value={country} onChange={(event) => setCountry(event.target.value)}
                        type="text"
                        id="country"
                        name="country"
                        placeholder="Country"></input>
                </div>
                <div className="city-input-area">
                    <textarea value={attractions} onChange={(event) => setAttractions(event.target.value)}
                        type="text"
                        id="attractions"
                        name="attractions"
                        placeholder="Tourist Attractions"></textarea>
                </div>




                <div>
                    <div>
                        <input type="checkbox" id="Sightseeing" name="Sightseeing" onChange={(event) => setFeatures(event.target.checked)}></input>
                        <label htmlFor="Sightseeing">Sightseeing</label>
                    </div>

                    <div>
                        <input type="checkbox" id="Food Tours:" name="Food Tours:" onChange={(event) => setFeatures(event.target.checked)}></input>
                        <label htmlFor="Food Tours:">Food Tours</label>
                    </div>

                    <div>
                        <input type="checkbox" id="Cultural Experiences" name="Cultural Experiences" onChange={(event) => setFeatures(event.target.checked)}></input>
                        <label htmlFor="Cultural Experiences">Cultural Experiences</label>
                    </div>

                    <div>
                        <input type="checkbox" id="Wildlife Safari" name="Wildlife Safari" onChange={(event) => setFeatures(event.target.checked)}></input>
                        <label htmlFor="Wildlife Safari">Wildlife Safari</label>
                    </div>

                    <div>
                        <input type="checkbox" id="Adventure Sports" name="Adventure Sports" onChange={(event) => setFeatures(event.target.checked)}></input>
                        <label htmlFor="Adventure Sports">Adventure Sports</label>
                    </div>
                </div>
                <div>
                    <input type="submit" value="Add a city"></input>
                </div>
            </form>
        </div>
    )
}

export default CitiesForm