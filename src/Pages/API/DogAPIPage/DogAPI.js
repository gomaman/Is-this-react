import { useEffect, useState } from "react"
import Container from "../../../components/Containers/Container"

const DogAPI = () => {

    const [breeds, setBreeds] = useState({})
    const [dogPictures, setDogPictures] = useState([])
    const [breed, setDogBreed] = useState('')
    const [amount, setAmount] = useState('')


    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
            .then(breedsData => { setBreeds(breedsData.message) })
    }, [])

    const breedNames = Object.keys(breeds);

    // useEffect(() => {
    //     fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    //         .then(res => res.json())
    //         .then(dogImageData => { setDogPictures(dogImageData.message) })
    // }, [breed])

    const addBreedHandler = event => setDogBreed(event.target.value)
    const addAmountHandler = event => setAmount(event.target.value)

    const fetchDogImage = () => {
        fetch(`https://dog.ceo/api/breed/${breed}/images/random/${amount}`)
            .then(res => res.json())
            .then(dogImageData => { setDogPictures(dogImageData.message) })
    }

    const handleButtonClick = () => {
        if (breed) {
            fetchDogImage();
        }
    }

    return (
        <Container>
            <form>
                <select onChange={addBreedHandler} defaultValue=''>
                    <option value='' disabled>--Select a breed---</option >
                    {breedNames.map((name, index) => <option value={name} key={index}>{name}</option>)}
                </select>
                <input onChange={addAmountHandler} value={amount} type="number" min={1} max={10}></input>
                {breed && dogPictures.map((url, index) => (
                        <img key={index} src={url} alt={`Dog ${index + 1}`} />
                    ))}
                <button type='button' onClick={handleButtonClick}> Fetch Dog Image</button>
            </form>
        </Container>
    )
}


export default DogAPI
