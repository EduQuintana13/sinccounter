import ItemCount from './CountContainer';
import ItemList from './ItemList';
import Item from './Item';
import jsonpack from './data.json';
import { useParams } from "react-router-dom";
import React, {useState,useEffect} from 'react';

           // <ItemCount product_name='Paquete de Zanahorias Deshidratas' stock={5} initial={1} />
           //     <ItemCount product_name='Paquete de Berenjena Deshidratas' stock={9} initial={1} />

        // <Item jsonpack={test2} />
const ItemListContainer = ({name}) => {
const {categoryid}=useParams();


const[cat,setCat]=useState(categoryid);
    const[item,setItems]=useState([])
    const call = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(jsonpack)


        },2000)
    })

    call.then(response=> {
        setItems(response)
    })





             console.log(cat);

    return (

       <div name="test">
    <div class="p-3 mb-2 bg-dark text-white">
        {name}



        <ItemList items={item}/>



       </div>



           </div>
   )
}


export default ItemListContainer;


