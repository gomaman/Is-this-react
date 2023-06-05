function ShopItem(props) {
  if (props.title) {
    return (
      <div className="shop-item">
        <h2 className="shop-title">{props.title}</h2>
        <ul className="shop-address-list">

          {props.phone && (
            <li>Phone: <a href={`tel:${props.phone}`}>{props.phone}</a></li>
          )}
          {props.email && (
            <li>Email: <a href={`mailto:${props.email}`}>{props.email}</a></li>
          )
          }
          {props.address && (
            <li>Address: <a href="/#" target="_blank">{props.address}</a></li>
          )
          }
        </ul>
      </div>
    )
  }

}

export default ShopItem;