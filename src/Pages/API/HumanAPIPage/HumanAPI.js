import Container from "../../../components/Containers/Container"
import { useEffect, useState } from "react"
function HumanAPI() {

    const [humanName, setHumanName] = useState('')
    const [humanGenderData, setHumanGenderData] = useState({})
    const [humanNationalityData, setHumanNationalityData] = useState({})
    const [humanAgeData, setHumanAgeData] = useState({})

    useEffect(() => {
        fetch(`https://api.genderize.io/?name=${humanName}`)
            .then(res => res.json())
            .then(humanGenderInfo => {
                setHumanGenderData(humanGenderInfo)
            })
    }, [humanName])

    useEffect(() => {
        fetch(`https://api.nationalize.io?name=${humanName}`)
            .then(res => res.json())
            .then(humanNationalityInfo => {
                setHumanNationalityData(humanNationalityInfo)
            })
    }, [humanName])


    useEffect(() => {
        fetch(`https://api.agify.io?name=${humanName}`)
            .then(res => res.json())
            .then(humanAgeInfo => {
                setHumanAgeData(humanAgeInfo)
            })
    }, [humanName])

    const humanAge = humanAgeData.age
    const nationalityCountryList = humanNationalityData.country
    const humanGender = humanGenderData.gender
    const genderProbability = humanGenderData.probability

    const generateNameData = (event) => {
        event.preventDefault()
        const nameValue = event.target.elements.name.value
        setHumanName(nameValue)
    }

    return (
        <Container>
            <label>Insert Human</label>

            <form onSubmit={generateNameData}>
                <input type="text" name="name"></input>
                <button type="submit">ENTER</button>
            </form>

            <div>
                {humanName && (
                    <ul>
                        <li>Name - {humanName}</li>
                        <li>Possible age - {humanAge}</li>
                        <li>Gender - {humanGender}; Probability - {genderProbability}</li>
                        <li>Possible nationalities -
                            <ul>
                                {nationalityCountryList.map(countryCode =>
                                    <li key={countryCode.country_id}>
                                        Country ID - {countryCode.country_id},
                                        Probability - {countryCode.probability}
                                    </li>)}
                            </ul>
                        </li>
                    </ul>
                )
                }
            </div>
        </Container>
    )
}


export default HumanAPI