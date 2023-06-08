import React from 'react';
import logo from './images/logo.png.jpg'


const Header =()=>{
    return(
    <>
    <div className='header'>
    <img src={logo} alt="logo" height='60' width='40' />
     <h1>keep</h1>
</div>
    </>
    )
};
export default Header;