import './ProductsList.css'
import { useState } from "react"
import Container from "../../components/Containers/Container"
import ProductItem from '../../components/Product/ProductItem';

const shoppingList = [
    {
        title: "milk",
        picture: "https://i5.walmartimages.com/asr/3592de4c-2d2d-4285-afbf-f0508775bd58_2.bb23225176016b4d5ce96c4efed80382.jpeg",
        done: false
    },

    {
        title: "bread",
        picture: "https://img.freepik.com/premium-photo/one-square-slice-toast-sandwich-bread-isolated-white-background-close-up_154092-2021.jpg?w=2000",
        done: false
    },

    {
        title: "apples",
        picture: "https://www.officeday.lt/images/1/450-02111/apples-jonagored-ii-class-kg.jpg",
        done: false
    },

    {
        title: "eggs",
        picture: "https://kidseatincolor.com/wp-content/uploads/2022/02/eggs-e1648216350119-1024x681.jpeg",
        done: false
    },

    {
        title: "tomatoes",
        picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1200px-Tomato_je.jpg",
        done: false
    },

    {
        title: "coffee",
        picture: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Roasted_coffee_beans.jpg",
        done: false
    },
];

function ProductsList() {

    const [products, setProduct] = useState(shoppingList)

    const productsStatus = products && products.length > 0 ? <h1>Your shopping list:</h1> : <h1>Please add something to the list</h1>

    const addNewProduct = (event) => {
        event.preventDefault()

        const newProductName = event.target.elements['newProduct'].value

        if (newProductName) {
            const newProductObj = {
                title: newProductName,
                picture: "https://media.istockphoto.com/id/1254636082/vector/supermarket-storefront-with-fruits-vegetables-dairy-products-local-grocery-store-vector-icon.jpg?s=1024x1024&w=is&k=20&c=zZhhHnXxbsdZjLw4b0uUnt-vL7VHz_6Mgp-bsbjRQZU=",
                done: false
            }
            setProduct([...products, newProductObj])

            event.target.reset()
        }
    }

    const changeStatusDone = (index) => {
        const updatedProducts = [...products]
        updatedProducts[index].done = !updatedProducts[index].done
        setProduct(updatedProducts)
    }

    const changeEdit = (index) => {
        console.log('e')
    }

    return (
        <Container>

            <form onSubmit={addNewProduct}>
                <input className='product-input' type="text" name="newProduct" placeholder='Add a product'></input>
                <input className='product-input' type="submit" value="submit"></input>
            </form>

            {productsStatus}

            <ul className='card-items'>
                {products.map((product, index) => (
                    <ProductItem
                        title={product.title}
                        picture={product.picture}
                        done={product.done}
                        key={index}
                        onToggleDone={() => changeStatusDone(index)}
                        onEdit={() => changeEdit(index)}
                    ></ProductItem>
                ))}
            </ul>

        </Container>
    )
}


export default ProductsList