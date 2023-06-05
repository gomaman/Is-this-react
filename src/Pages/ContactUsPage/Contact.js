import './Contact.css';
import Container from '../../components/Containers/Container';
import Shops from '../../components/ShopComponents/ShopList/ShopList';
import Maps  from '../../components/ShopComponents/ShopMap/ShopMap';

function Contact(props) {
    console.log(props)
    return (
        <div className="Contact">
            <Container className='container'>
                    <div className="content">
                        <Shops/>
                        <Maps/>
                    </div>
            </Container>
        </div>
    );
}

export default Contact;
