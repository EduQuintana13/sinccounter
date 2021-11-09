import React,{useState} from "react";
import ItemCount from "./ItemCount";
const CountContainer =({initial,stock,product_name})=>{
const [count,setCount]=useState(initial);

    const add=()=>{

        if(count+1>stock){
alert("Superaste la cantidad de items en stock");

        }


            else{

        setCount(count+1);
            }


};


    const sub=()=>{


        if(count === 0)
           alert("Debes agregar al menos un item al carrito");
            else
        setCount(count-1);



        };



    return (
        <>

        <ItemCount min={sub} max={add}  count={count} product_name={product_name} />
        </>


    );

};
export default CountContainer;
