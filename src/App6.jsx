import React,{useState} from 'react';
import Header from './Header';
import Foot from './Foot';
import CreateNote from './CreateNote';
import Note from './Note';
import A3 from './A3';

const App6 =()=>{

  const [addItem , setAddItem] =useState([]);

  const addNote=(Note)=>{
    alert('i am clicked')
    setAddItem((prevData)=>{
      return(
        [...prevData , Note]
      )
    })
  }
  const onDelete=(id)=>{
    setAddItem((oldData)=>
    oldData.filter((currData,indx)=>{
      return indx !== id
      
    })
    );

  };
    return(
    <>
      <Header/>
     
   
     <CreateNote passNote={addNote}/>
   

     {addItem.map((val,index) =>{
      return (<Note
                  key={index}
                  id={index}
                  title={val.title}
                  content={val.content} 
                  deleteItem = {onDelete}
                />
      );
     })};

     <Foot/>
     <A3/>

    </>
    )
};
export default App6;