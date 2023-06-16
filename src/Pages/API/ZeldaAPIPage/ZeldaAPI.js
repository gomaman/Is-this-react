import { useEffect, useState } from "react";
import Container from "../../../components/Containers/Container";
import FoodTypeCreatures from "./Components/FoodTypeCreatures";
import './ZeldaAPI.css';

function ZeldaAPI() {
    const [zeldaData, setZeldaData] = useState({});
    const [creatureDescription, setCreatureDescription] = useState({});
    const [creatureName, setCreatureName] = useState('')

    useEffect(() => {
        fetch("https://botw-compendium.herokuapp.com/api/v2/all")
            .then((res) => res.json())
            .then((zeldaDataInfo) => {
                setZeldaData(zeldaDataInfo);
            });
    }, []);


    useEffect(() => {
        fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${creatureName}`)
            .then(res => res.json())
            .then(creatureDataInfo => {
                setCreatureDescription(creatureDataInfo)
            })
    }, [creatureName])

    if (Object.keys(zeldaData).length === 0) {
        return (
            <Container>
                <h1>Loading...</h1>
            </Container>
        );
    }

    const creatureNameHandler = (event) => {
        setCreatureName(event.target.value)
    }


    const singleCreatureName = creatureDescription.data.name
    const singleCreatureCategory = creatureDescription.data.category
    const singleCreatureDescription = creatureDescription.data.description
    const singleCreatureCookingEffect = creatureDescription.data.cooking_effect
    const singleCreatureHeartsRecovered = creatureDescription.data.hearts_recovered
    const singleCreatureImage = creatureDescription.data.image
    const singleCreatureLocations = creatureDescription.data.common_locations


    const creaturesFoodTypeArr = zeldaData.data.creatures.food
    const creaturesNonFoodTypeArr = zeldaData.data.creatures.non_food


    return (
        <Container>
            <h1>BOTW</h1>

            <div className="big-data-container">
                <div className="category-container">
                    <div className="sub-category-container">

                    <FoodTypeCreatures
                    foodType={creaturesFoodTypeArr}
                    name={singleCreatureName}
                    category={singleCreatureCategory}
                    description={singleCreatureDescription}
                    cooking_effect={singleCreatureCookingEffect}
                    hearts_recovered={singleCreatureHeartsRecovered}
                    image={singleCreatureImage}
                    common_locations={singleCreatureLocations}
                    creatureNameHandler={creatureNameHandler}
                    >
                    </FoodTypeCreatures>

                        <div className="sub-category-wrap">
                            <h2>Non-Food Type Creatures</h2>
                            <select defaultValue=''>
                                <option value='' disabled>Select a non-food type creature</option >
                                {creaturesNonFoodTypeArr.map((creature, index) => <option value={creature.name} key={index}>{creature.name}</option>)}
                            </select>

                        </div>
                    </div>
                </div>

                <div className="category-container">
                    <h2>Equipment</h2>
                </div>

                <div className="category-container">
                    <h2>Materials</h2>
                </div>

                <div className="category-container">
                    <h2>Monsters</h2>
                </div>

                <div className="category-container">
                    <h2>Treasures</h2>
                </div>
            </div>
        </Container>
    );
}

export default ZeldaAPI;