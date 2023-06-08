import React from 'react';
import about from '../images/About.png';

import Common from './Common';

const About=()=> {
  return (
   
        <>
  <Common 
  name='Welcome to About Page' 
  imgsrc={about} 
  visit="/contact" 
  btname="Contact now"

  />
    </>
  )
}

export default About;