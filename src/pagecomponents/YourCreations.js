import { Navbar as NavbarBT, Nav, Form, Button, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Creations = () => {
    return ( 
        <div className="row">
            <ul className="list_style mt-2 row " id="creations_list">
                <Link to="/createAsset" className=""><li>Create a new Asset</li></Link>
            </ul>
            <ul className="list_style mt-2 row" id="creations_list">
                <Link to="/games" className="navbar_link mt-2 list_item_style col-4"><li>Games</li></Link>
                <Link to="/worlds" className="navbar_link mt-2 list_item_style col-4"><li>Worlds</li></Link>
                <Link to="/continents" className="navbar_link mt-2 list_item_style col-4"><li>Continents</li></Link>
                <Link to="/nations" className="navbar_link mt-2 list_item_style col-4"><li>Nations</li></Link>
                <Link to="/cities" className="navbar_link mt-2 list_item_style col-4"><li>Cities</li></Link>
                <Link to="/organisations" className="navbar_link mt-2 list_item_style col-4"><li>Organisations</li></Link>
                <Link to="/actors" className="navbar_link mt-2 list_item_style col-4"><li>Actors</li></Link>
            </ul>
            
        </div>
     );
}
 
export default Creations;