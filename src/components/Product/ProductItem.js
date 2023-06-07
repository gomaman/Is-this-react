import './ProductItem.css'

function ProductItem(props) {
    return (
        <div className="card">
                <h1>{props.title}</h1>
                <p><button>Add to Cart</button></p>
        </div>
    )
}


export default ProductItem