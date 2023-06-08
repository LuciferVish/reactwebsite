import React from 'react';



const Foot =()=>{
    const year = new Date().getFullYear();
    return(
    <>
    <footer>
        <p className='footer'>Copyright © {year}</p>
    </footer>
   
    </>
    )
};
export default Foot;