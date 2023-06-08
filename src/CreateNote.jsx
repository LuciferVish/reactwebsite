import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';



const CreateNote =(props)=>{

    const [Note , setNote] =useState({
        title:"",
        content:"",
    });

    const inputEvent=(event)=>{

       const {name ,value} =event.target;

      setNote((prevData)=>{
          return { ...prevData,[name]:value,

            }
      });
    }
    const addEvent=()=>{
      props.passNote(Note)
      setNote({
        title:"",
        content:"",
    });
    }

    return(
    <>
    <div className='main_note'>
    <form>
      <input 
      type='text'
      name="title"
       value={Note.title}
       onChange= {inputEvent} 
       placeholder='Title' 
       autoComplete='off'/>

         <textarea
          rows="" 
          column="" 
          name="content"
          value={Note.content}
           onChange= {inputEvent} 
           placeholder='write a note ...'>
         </textarea>    

           <Button onClick={addEvent}>
               <AddIcon className='plus_sign'/>
           </Button>

    </form>

    </div>
    </>
    )
};
export default CreateNote;