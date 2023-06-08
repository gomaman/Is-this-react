import './CitiesPage.css'
import { citiesData } from "./CitiesData"
import CityItem from "./CityItem"
import CitiesForm from './CitiesForm'

function CitiesPage() {
    const isOddLength = citiesData.length % 2 === 1
    return (
        <section>
            {CitiesForm()}
            <div className='cities-container'>
                {citiesData.map((city, index) => (
                    <CityItem
                        isCapital={city.isCapital}
                        key={index}
                        name={city.name}
                        population={city.population}
                        continent={city.location.continent}
                        country={city.location.country}
                        touristAttractions={city.touristAttractions}
                        isLastInOdd={index === citiesData.length - 1 && isOddLength}
                    />
                ))}
            </div>
        </section>
    )
}

export default CitiesPage