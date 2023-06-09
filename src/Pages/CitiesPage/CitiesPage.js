import { useState } from 'react'
import './CitiesPage.css'
import { citiesData } from "./CitiesData"
import CityItem from "./CityItem"
import CitiesForm from './CitiesForm'

function CitiesPage() {

    const [cities, setCities] = useState(citiesData)

    const addCity = (newCityItem) => {
        setCities([newCityItem, ...cities]);
      };

    const removeCity = (cityName) => {
        const cityIndex = cities.findIndex((city) => city.name === cityName);
        if (cityIndex !== -1) {
          const updatedCities = [...cities];
          updatedCities.splice(cityIndex, 1);
          setCities(updatedCities);
        }
      };

    const isOddLength = cities.length % 2 === 1
    return (
        <section>
            <CitiesForm addCity={addCity} />
            <div className='cities-container'>
                {cities.map((city, index) => (
                    <CityItem
                        cities={cities}
                        index={index}
                        isCapital={city.isCapital}
                        key={index}
                        name={city.name}
                        population={city.population}
                        continent={city.location.continent}
                        country={city.location.country}
                        touristAttractions={city.touristAttractions}
                        isLastInOdd={index === cities.length - 1 && isOddLength}
                        removeCity = {removeCity}
                    />
                ))}
            </div>
        </section>
    )
}

export default CitiesPage