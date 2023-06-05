function ShopItem(props) {
  const {title, phone, email, address} = props.data
  if (title) {
    return (
      <div className="shop-item">
        <h2 className="shop-title">{title}</h2>
        <ul className="shop-address-list">
          {phone && (<li>Phone: <a href={`tel:${phone}`}>{phone}</a></li>)}
          {email && (<li>Email: <a href={`mailto:${email}`}>{email}</a></li>)}
          {address && (<li>Address: <a href="/#" target="_blank">{address}</a></li>)}
        </ul>
      </div>
    )
  }

}

export default ShopItem;