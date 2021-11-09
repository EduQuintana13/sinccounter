
import React, {useState,useEffect} from 'react';
import {Card,Button} from 'react-bootstrap';
import  ItemCount from './CountContainer';
import {Link} from 'react-router-dom';
import Cart from './Cart';

export const ItemDetailButton =({contador})=>{


console.log("Contador"+contador);
    const  onAdd=({e})=>{
console.log("Estoy en onAdd ItemDetail y count:");
document.getElementById("but1").style.display="block";
document.getElementById("but2").style.display="none";
alert("Enhorabuena vuestro producto ha sido agregado al carrito de compras");

}

    return(
        <>

        <button disabled={contador===0} id="but2" onClick={onAdd}>Agregar a carrito</button>

        </>
    );
};
export const ItemDetail =({jsonpack})=>{
    console.log("Detalle de ItemDetail:",jsonpack);


    function Terminar(){
        window.location.href="/cart";
    }






if(jsonpack){
    return(
      <>
        <div id="centerman" align="center">

        <Card  border="light"  bg="dark" style={{ width: '18rem' }}
className="mb-2">

<Card.Header>

  <Card.Img variant="top"  src={jsonpack.pictureurl} />
            </Card.Header>
  <Card.Body>
      <Link to={`/item/${jsonpack.id}`}>

          <Card.Link href="#" >{jsonpack.title}</Card.Link>
          </Link>
          <Card.Subtitle className="mb-2 text-muted">Precio:{jsonpack.price}</Card.Subtitle>
    <Card.Text>
        Cantidad disponible:{jsonpack.stock}
        </Card.Text>
  </Card.Body>
</Card>



    <ItemCount product_name={jsonpack.title} stock={jsonpack.stock} initial={1} />
        <button id="but1" style={{display:'none'}}  onClick={Terminar}>Terminar mi compra</button>


        </div>
      </>
    );

}

else {
    return(<></>);
}

};



