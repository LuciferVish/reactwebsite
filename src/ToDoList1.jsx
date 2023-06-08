import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListComp from './ListComp';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const ToDolist1= ()=>{

    const [Items , setItems] =useState();
    const [NewItem , setNewItem]= useState([]);



    const inputEvent =(event) =>{
        setItems(event.target.value);

    }
    const listofitems=() =>{
        setNewItem ((prevValue)=>{
        return [...prevValue , Items];
        } );
        setItems(" ");
    };


    return(
        <>
        <div className='main_div'>
        <div className='center-div'>
        <br/>

          <h1 className='text-danger text-center'>ToDo List</h1>
          <br/>
          <input type='text' value={Items} placeholder='add an item' onChange={inputEvent}></input>
          <Button className='newbtn' onClick={listofitems}><AddIcon/></Button>
          <br/>
          <ol>
            
            {NewItem.map ((value , index) =>{
                return <ListComp key={index} text={value} />
            })}

          </ol>
          <br/>
        </div>


        </div>

        </>
    )
}

 export default  ToDolist1;
