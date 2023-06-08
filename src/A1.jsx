
import React, { useEffect, useState } from 'react';


const A1 = () => {

    const [Num , setNum] =useState(0);
    const [Nums , setNums] =useState(10);
    useEffect(() =>{
       alert ('i am clicket on button');
       document.title= `you clicked me ${Num} times`;
    },[Num]);

   
  return (
    <>
       <button onClick={()=>{
        setNum(Num+1);
       }}  > click me {Num}</button>
       <br/>
         <button onClick={()=>{
        setNums(Nums+1);
       }}  > click me {Nums}</button>
    </>
  );
};

export default A1;


