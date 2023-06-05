import ShopItem from '../ShopItem/ShopItem';
import { SHOP_DATA } from '../../Config/Config';

function ShopsList() {
  return (
    <div className="shops-wrapper">
      <h1 className="shops-section-title">Find Us</h1>
      <div className="shops-list">
        {SHOP_DATA.map((shop, index) => (
          <ShopItem 
          key={index}
          data={shop}
          />   
        ))}
      </div>
    </div>
  )
}

export default ShopsList;