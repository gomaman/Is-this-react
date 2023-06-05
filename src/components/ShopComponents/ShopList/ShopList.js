import ShopItem from '../ShopItem/ShopItem';

function ShopsList() {
  const SHOP_DATA = [
    {
      title:"Parduotuve 1",
      phone:"+370456453131",
      email:"info1@parduotuve.lt",
      address:"Topolių g. 3, LT-54359, Kauno r. sav."
    },
    {
      title:"Parduotuve 2",
      phone:"+370456444444",
      email:"info1@parduotuve.lt",
      address:"Miklusėnų g. 31-30, LT-62332, Alytaus m. sav."
    },
    {
      title:"Parduotuve 3",
      phone:"+370456555555",
      email:"info1@parduotuve.lt",
      address:"Šiltnamių g. 26a, LT-04129, Vilniaus m. sav."
    },
    {
      title:"Parduotuve 4",
      phone:"+370456666666",
      email:"info1@parduotuve.lt",
      address:"Ulonų g. 31, LT-62161, Alytaus m. sav."
    },
  ]


  return (
    <div className="shops-wrapper">
      <h1 className="shops-section-title">Find Us</h1>
      <div className="shops-list">
        {SHOP_DATA.map(({title, phone, email, address}, index) => (
          <ShopItem 
          key={index}
          title={title} 
          phone={phone} 
          email={email} 
          address={address}
          />   
        ))}
      </div>
    </div>
  )
}

export default ShopsList;