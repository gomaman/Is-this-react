import '../Counter/Counter.css'
import { useState } from "react"
import Container from "../../components/Containers/Container"
import ProductItem from '../../components/Product/ProductItem';

// 1. Naudojant react-router-dom sukurti du routes (puslapius) Shopping List.
// 1.1. Sukurti navigacijos komponentą, kuriame yra nuorodos, nukreipiančios į šiuos du puslapius (naudoti Link komponentą iš react-router-dom).

// 2. ShoppingList komponente sukurti masyvą state (naudojant useState) su penkių pirkinių sąrašu. Kiekvienas pirkinys turi būti objektas ir turėti properties:
// 2.1 title (string tipo)
// 2.2. done (boolean tipo)

// 3.1. Jeigu pirkinių masyvas neturi nei vieno nario, tai į ekrane parašyti: „Your shopping list is empty."
// 3.2. Jeigu pirkinių masyve yra bent vienas narys, tai kiekvieną nario title property išvesti į ekraną panaudojant ShoppingItem komponentą jam paduodant informaciją per props.

const shoppingList = [

    {
        title: "milk",
        done: false
    },

    {
        title: "bread",
        done: false
    },

    {
        title: "apples",
        done: false
    },

    {
        title: "eggs",
        done: false
    },

    {
        title: "tomatoes",
        done: false
    },

];


function ShoppingList() {

    const [products, setProduct] = useState(shoppingList)

    const setProducts = (newProduct) => {
        setProduct([...products, newProduct])
    };

   const productTitle = products && products.length > 0 ? <h1>Your shopping list:</h1> : <h1>Please add something to the list</h1>

    return (
        <Container>
            {productTitle}  

            <div className='card-items'>
                {products.map((product, index) => (
                    
                    <ProductItem
                    title={product.title}
                    key={index}
                    ></ProductItem>
                   
                ))}

            </div>


        </Container>
    )

}


export default ShoppingList