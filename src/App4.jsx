import React ,{useState} from 'react';
import './index.css';
import ToDolist from './ToDolist';


const App4 =()=>{

    const [inputList , setInputList] =useState("");

    const [items,setItems] =useState([]);

    const itenEvent =(event) =>{
       setInputList(event.target.value)

    };

    const listOfItems=()=>{
        setItems((oldItems) => {
         return [...oldItems,inputList]
        });
       setInputList("");
    };
    const deleteItems=(id)=>{
        console.log('deleted');
        setItems((oldItems)=>{
         return oldItems.filter((arrElem ,index) =>{
                 return index !==id ;
         });
        });
    }

    return(
        <>
           <div className='main_div'>
           <div className='center_div'>
             <br/>

             <h1> ToDo List</h1>
             <br/>
             <input type='text' placeholder='Add a item' onChange={itenEvent} value={inputList}/>
             <button onClick={listOfItems}> +</button>
             <ol>
             {items.map((itemvalue , index) =>{
              return  <ToDolist key={index}
                          id ={index}
                          text={itemvalue}
                          onSelect = {deleteItems} />
             })
             }
             </ol>


           </div>
           </div>
       </>

    );
};
export default App4;
