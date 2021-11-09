import { Nav} from 'react-bootstrap';
import React from 'react';
import cart from './cart.jpg'

const Carrito = () => {
   return (


          <Nav.Link href="#carrito"> Carrito de compras
      <img src={cart} alt="logo" width="30"></img>
              </Nav.Link>




   )
}


export default Carrito;


