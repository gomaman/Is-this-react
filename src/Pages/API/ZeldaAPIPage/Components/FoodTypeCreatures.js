import '../ZeldaAPI.css'

const FoodTypeCreatures = ({creatureNameHandler, foodType,name,category,description,cooking_effect,hearts_recovered,image,common_locations }) => {
    
    return (
        <div className="sub-category-wrap">
            <h2>Food Type Creature</h2>

            <select onChange={creatureNameHandler} defaultValue=''>
                <option value='' disabled>Select a food type creature</option >
                {foodType.map((creature, index) => <option value={creature.name} key={index}>{creature.name}</option>)}
            </select>

            {name &&
                (<div className='creature-description-container'>
                    <p>From: {category}</p>
                    <p>Name: {name}</p>
                    <img src={image} alt={name} ></img>
                    <p>Description: {description}</p>
                    <p>{cooking_effect ? `${"Effect"}: ${cooking_effect} ` : `No Effect`} </p>
                    <p>
                        {hearts_recovered > 0
                            ? hearts_recovered === 1
                                ? `Will recover ${hearts_recovered} heart`
                                : `Will recover ${hearts_recovered} hearts`
                            : "Will not recover hearts"}
                    </p>
                    <span>Common Locations:</span>
                    <ul>
                        {common_locations.map((location, index) => <li key={index}>{location}</li>)}
                    </ul>
                </div>)}
        </div>
    )
}


export default FoodTypeCreatures

