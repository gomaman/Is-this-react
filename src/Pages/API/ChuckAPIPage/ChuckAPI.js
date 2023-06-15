import { useEffect, useState } from "react"
import { json } from "react-router-dom"
import Container from "../../../components/Containers/Container"
const ChuckAPI = () => {

    const [joke, setJoke] = useState('No joke...yet')
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [inputSearch, setInputSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isSubmitClicked, setIsSubmitClicked] = useState(false)

    useEffect(() => {
        const categoryParam = selectedCategory ? `?category=${selectedCategory}` : '';
        fetch('https://api.chucknorris.io/jokes/random' + categoryParam)
            .then(res => res.json())
            .then(data => {
                setJoke(data.value)
            })
    }, [selectedCategory])

    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(res => res.json())
            .then(CategoriesData => {
                setCategories(CategoriesData)
            })
    }, [])


    useEffect(() => {
        const searchQuery = inputSearch ? `${inputSearch}` : '';
        fetch('https://api.chucknorris.io/jokes/search?query=' + searchQuery)
            .then(res => res.json())
            .then(searchResults => {
                setSearchResults(searchResults)
            })
    }, [isSubmitClicked])

    const categorySelectHandler = event => setSelectedCategory(event.target.value)

    const inputSearchHandler = event => setInputSearch(event.target.value)
    
    const randomJokeHandler = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => {
            setJoke(data.value)
        })
    }


    const SearchSubmitHandler = event => {
        event.preventDefault();
        setIsSubmitClicked(true);
    }


    return (
<Container>
    {(categories.length > 0 && joke) ? (
        <div>
            <form>
                <select onChange={categorySelectHandler} defaultValue=''>
                    <option value='' disabled>---Select a category---</option>
                    {categories.map((category, index) => <option value={category} key={index}> -{category}</option>)}
                </select>
            </form>

            <p>{joke}</p>

            <button onClick={randomJokeHandler}>Get a joke</button>

            <form onSubmit={SearchSubmitHandler}>
                <input type="text" onChange={inputSearchHandler} ></input>
                <button >Search for a joke</button>
            </form>

            <div>
                <ul>
                {searchResults.result && searchResults.result.map((result, index) => (
                                <li key={index}>{result.value}</li>
                ))}
                </ul>
            </div>
        </div>
    ) : 'Loading...'}
</Container>
    )
}


export default ChuckAPI