import './ProductItem.css'


function ProductItem({ title, picture, done, onToggleDone, onEdit }) {

    const handleClick = () => {
        onToggleDone();
    }

    const handleEdit = () => {
        onEdit();
    }

    return (
        <li>
            <div className={done ? 'card-added' : 'card'}>
                <h2 className='product-title'>{title}</h2>
                <img className="product-picture" src={picture} alt={title}></img>
                <div className='button-container'>
                <p><button onClick={handleClick}>{done ? 'Del' : "Add"}  </button></p>
                <p><button onClick={handleEdit}>Edit</button></p>
                </div>
                

            </div>
        </li>
    )
}


export default ProductItem