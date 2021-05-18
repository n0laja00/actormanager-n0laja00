import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar as NavbarBT, Nav, Form, Button, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <div className="row">
            <NavbarBT collapseOnSelect  className="col-12" bg="dark" expand="lg" variant="dark">
                <NavbarBT.Brand href="/">Actor Manager</NavbarBT.Brand>
                <NavbarBT.Toggle aria-controls="responsive-Navbar-nav" />
                <NavbarBT.Collapse id="responsive-Navbar-nav">
                    <Nav className="col-9 mr-auto">
                        <Link to="/" className="navbar_link mt-2">Home</Link>
                        <Link to="/yourCreations" className="navbar_link mt-2 ms-3">Your Creations...</Link>
                        <Link to="/yourCreations" className="navbar_link mt-2 ms-3">Games</Link>
                        <Link to="/yourCreations" className="navbar_link mt-2 ms-3">Blog</Link>
                        <Link to="/yourCreations" className="navbar_link mt-2 ms-3">About Us</Link>
                    </Nav>
                    
                    <Form inline className="col-lg-3 col-md-12 col-sm-12">
                        <input type="text" placeholder="Search" className="mr-sm-2 col-6" />
                        <Button variant="outline-danger col-5 ms-1 text-break">Search</Button>
                    </Form>
                </NavbarBT.Collapse>
            </NavbarBT>

        </div>
    );
}
 
export default Navbar;