import './ProductItem.css'

function ProductItem(props) {
    return (
        <div className="card">
                <h2 className='product-title'>{props.title}</h2>
                <img className="product-picture" src={props.src}></img>
                <p><button>Add to Cart</button></p>
        </div>
    )
}


export default ProductItem