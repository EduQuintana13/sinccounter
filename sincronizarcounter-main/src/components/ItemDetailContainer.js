
import {Card,CardGroup} from 'react-bootstrap';
import ItemList from './ItemList';
import {ItemDetail} from './ItemDetail';
// import {ItemDetail} from './ItemDetail';
import {useParams} from "react-router-dom";
import React, {useState,useEffect} from 'react';
           // <ItemCount product_name='Paquete de Zanahorias Deshidratas' stock={5} initial={1} />
           //     <ItemCount product_name='Paquete de Berenjena Deshidratas' stock={9} initial={1} />
        // <Item jsonpack={test2} />
import productos from './data.json';
// import Item from './Item';



const ItemDetailContainer = ({items}) => {



    const[producto,setProducto]=useState([])
const {itemid}=useParams();
    useEffect(()=>{


    if(items)
    {
console.log("Good news item is defined");

    }

    else{


items=productos;
console.log("badnews");
    }



        const call=new Promise ((resolve,reject)=>{
            setTimeout(()=>{
                resolve(items)
            },2000)
        })

        call.then(response=>{
            console.log(itemid);
            console.log(response[itemid-1]);
            setProducto(response[itemid-1]);
        })
    },[])


    return (



    <div class="p-3 mb-2 bg-dark text-white">


            <ItemDetail  jsonpack={producto} />
           </div>
            )



}
export default ItemDetailContainer;
