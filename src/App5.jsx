import React, { useState,useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Clock from 'react-clock';

const App5=()=>{

    const[incrementNum,setIncrementNum] =useState(0);
    

const increase= () =>{
 setIncrementNum(incrementNum+1)

};
const decrease =()=>{
    if (incrementNum > 0){
    setIncrementNum(incrementNum-1);
} else {
    alert('zero limit is reached')
      setIncrementNum(0);
}
};

    return(
            <>
            
              <div className='main_div'>
              <div className='center_div'>
                <h1>{incrementNum}</h1>
                <div className='btn_div'>
                <Tooltip title="Add">
                     <Button onClick={increase}><AddIcon/></Button>
                     </Tooltip>
                     <Tooltip title="Delete">
                     <Button onClick={decrease}><DeleteIcon/></Button>
                        </Tooltip>
                        
                </div>


              </div>
              
              
              </div>

            </>
    )
};

export default App5;