import {Link} from 'react-router-dom';
import React from 'react';
import image from './1.png'
import cart from './cart.gif'
import { Navbar, NavItem,NavTabs,NavDropdown,MenuItem,Nav,Form,FormControl,Button,Dropdown,DropdownButton} from 'react-bootstrap';
import Carrito from './CartWidget.js';





const NavBar = () => {
   return (
<Navbar expand="lg" bg="dark" variant="dark" class="navbar navbar-dark bg-dark" className="navbar-right">
    <Navbar.Brand>


<Link to={`/`}>
       <img src={image}
        width="100"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />


</Link>
    Frutos Secos Don Mauro</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link>
<Link to={`/categories`}>
    Inicio
</Link>
    </Nav.Link>          <Carrito/>
          <NavDropdown title="Categorias" id="basic-nav-dropdown">


                  <NavDropdown.Item>
       <Link to={`/categories/1`}>Verduras</Link>
                      </NavDropdown.Item>


                  <NavDropdown.Item>
       <Link to={`/categories/2`}> Frutas</Link>
                      </NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

















    )
}






export default NavBar;













