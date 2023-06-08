import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const ListComp =(props)=> {

    const [line , setLine]= useState(false);
    const cutIt=()=>{
        setLine(true);
    }
    return(
    <div className='todo_style'>
    <span onClick={cutIt} className='cutIt'><DeleteIcon className='icon'/>  </span>
     <li  style={{textDecoration : line ?  "line-through" : 'none'}}>{props.text}</li>
     <button className='btn btn-success'>Hii</button>
     <h1> Hii{props.name}</h1>
</div>)
}


export default ListComp;