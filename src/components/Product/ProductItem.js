import './ProductItem.css'


function ProductItem({ title, picture, done, onToggleDone }) {

    const handleClick = () => {
        onToggleDone();
    }

    return (
        <li>
            <div className={done ? 'card-added' : 'card'}>
                <h2 className='product-title'>{title}</h2>
                <img className="product-picture" src={picture} alt={title}></img>
                <p><button onClick={handleClick}>{done ? 'Remove' : "Add to Cart"}  </button></p>
            </div>
        </li>
    )
}


export default ProductItem