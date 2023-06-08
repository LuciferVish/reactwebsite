import React from 'react';
import Home from '../src/Website/Home';
import About from '../src/Website/About';
import Contact from '../src/Website/Contact';
import Services from '../src/Website/Services';
import Navbar from '../src/Website/Navbar';
import { Routes , Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../src/Website/index1.css';
import Footer from '../src/Website/Footer';

const App8=()=> {
  return (
    <>
    <Navbar/>
  
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/about' element ={<About/>}/>
            <Route exact path='/services' element ={<Services/>}/>
            <Route exact path ='*' element={<Home/>}/>
        </Routes>
        <Footer/>


    
    </>
  )
}

export default App8;