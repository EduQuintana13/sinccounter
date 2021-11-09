



En App.js se agrego la siguiente ruta para poder cumplir con el requerimiento de al momento terminar la compra navegar a /cart

                    <Route path="/cart">
                        <Cart/>
                        </Route>

Se saco la lógica de función onAdd de CountContainer y se llevo a /src/ItemDetail.js
para realizar la anterior desde ItemCount se llama componente <ItemDetailButton> que se encuentra en ItemDetail

          <ItemDetailButton contador={count}/>



 El cerebro de toda la operación se encuentra en ItemDetail.

Contamos con ItemCount que aún sigue con el resto de la lógica y Terminar mi compra que inicialmente esta escondido con display:none

Los siguientes componentes siguen dentro de ItemDetail
    <ItemCount product_name={jsonpack.title} stock={jsonpack.stock} initial={1} />
        <button id="but1" style={{display:'none'}}  onClick={Terminar}>Terminar mi compra</button>


Una vez que el cliente hacer click en agregar al carro de nuestro componente <ItemDetailButton/> se llama función onAdd usamos el evento onClick para tal efecto
Se muestra  código de componente a continuación para facilidad del corrector.

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

onAdd es como un mago que hace desaparecer el botón Agregar al carro but2 y hace aparecer el bóton but1 con block 


Una vez que el usuario hace click en Terminar mi compra se llama función Terminar que manda al usuario al Cart usando ese método cool de javascript window.location.href="/cart"

        <button id="but1" style={{display:'none'}}  onClick={Terminar}>Terminar mi compra</button>



    function Terminar(){
        window.location.href="/cart";
    }






Adjunto el código de ItemDetail :



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





¡Muchas gracias por revisar Saludos!
