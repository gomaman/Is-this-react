import ShopItem from '../ShopItem/ShopItem';

function ShopsList() {
  return (
    <div className="shops-wrapper">
      <h1 className="shops-section-title">Find Us</h1>

      <div className="shops-list">
        <ShopItem title="Parduotuve 1" phone="+370456453131" email="info1@parduotuve.lt" address=" Topolių g. 3, LT-54359, Kauno r. sav."/>
        <ShopItem title="Parduotuve 2" phone="+370456444444" email="info2@parduotuve.lt" address=" Miklusėnų g. 31-30, LT-62332, Alytaus m. sav."/>
        <ShopItem title="Parduotuve 3" phone="+370456555555" email="info3@parduotuve.lt" address=" LT-67268, Ricieliai, Druskininkų sav."/>
        <ShopItem title="Parduotuve 4" phone="+370456666666" email="info4@parduotuve.lt" address=" Ulonų g. 31, LT-62161, Alytaus m. sav."/>
      </div>
    </div>
  )
}

export default ShopsList;