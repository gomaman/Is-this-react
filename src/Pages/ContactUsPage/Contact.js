import './Contact.css';
import Shops from '../../components/ShopComponents/ShopList/ShopList';
import Maps  from '../../components/ShopComponents/ShopMap/ShopMap';

function Contact() {
    return (
        <div className="Contact">
            <div className="container">
                <div className="container">
                    <div className="content">
                        <Shops/>
                        <Maps/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
