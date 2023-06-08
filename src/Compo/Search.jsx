import React , {useState} from 'react';
import Sresult from './Sresult';

const Search =()=>{
    const [img , setImg] =useState("");
    const inputEvent =(event)=>{
     const   data = event.target.value;
     setImg(data);
        console.log(data);
    }

   return (
    <>
    <div className='searchbar'>
       <input type='text' placeholder='search anything' onChange={inputEvent} value={img}/>
       </div>
           {img === "" ? null : <Sresult name={img}/>} 
         </>
   )
};


export default Search;