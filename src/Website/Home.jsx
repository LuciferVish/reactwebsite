import React from 'react';
import Common from './Common';
import web from '../images/top11.png';

const Home=()=> {
  return (
    <>
    <Common
       name='Grow Your Business With' 
       imgsrc={web} 
       visit="/services" 
       btname="Get Started"
    />
    </>
  )
}

export default Home;