import React from 'react';
import data from './data.json';
import {Card} from 'react-bootstrap';
import Item from './Item'
import { useParams } from "react-router-dom";
import  {useState,useEffect} from 'react';
let count=1;
const ItemList = ({items}) =>{
useEffect(()=>{
    if(count==1&& (categoryid>2 ||categoryid<=0))
        alert("Solo categorias 1-2 están disponibles por favor cambiar categoria");
count=count+1;
});

const {categoryid}=useParams(null);
    let ListTemplate;
    console.log(categoryid);





    if (!categoryid) {

    console.log("In the function dude");
      ListTemplate = items.map(item=><Item key={item.id} jsonpack={item} />);


    }
else {
    console.log(categoryid);
    ListTemplate=items.filter(item=>item.categoryid==categoryid).map(filteredName=>(<Item key={filteredName.id} jsonpack={filteredName}/>));


}






    return (
        <>
        {ListTemplate}
        </>

    )
}

export default ItemList;

