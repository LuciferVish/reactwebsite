import React from 'react'
import { NavLink } from 'react-router-dom';

const Error =()=>{
   return (
    <>
        <h1> 404 error page</h1>
        <p> sorry , this page doesnot exist</p>
        <NavLink to ="/"> goback  </NavLink>
    </>
   )
};


export default Error;