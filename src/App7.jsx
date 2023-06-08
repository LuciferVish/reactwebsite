import React from 'react';
// import StateWise from '../src/Component/statewisedata/StateWise';
import { BrowserRouter  , Route , Routes ,NavLink } from 'react-router-dom';
import Contact from '../src/Compo/Contact';
import About from '../src/Compo/About';
import Navbar from '../src/Compo/Navbar';
import ListComp from './ListComp';
// import A1 from './A1';
import User from '../src/Compo/User';
import Error from '../src/Compo/Error';
import Search from '../src/Compo/Search';
// import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';







const App7 = () => {

  return (

 <>
 
  <Navbar/>
  <div className=''>
  <h1 className="text-center">Website</h1>
  <br/>
  <div className='text-center'>
  <div class="card" style={{width: "18rem"}}>
  <img src="https://picsum.photos/seed/picsum/200/200" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://google.com" class="btn btn-outline-success">Go somewhere</a>
  </div>
</div>
  <button className='btn btn-outline-success '> Welcome to future</button>
  </div>
  </div>
<BrowserRouter>
 <Routes>
      <Route exact path ='/Contact' element={<Contact/>}/>
      <Route exact path ='/About' element={<About/>}/>
      <Route exact path ='/'        element={<ListComp/>}/>
      <Route exact path ='/Contact/List' element={<ListComp/>}/>
      <Route exact path ='/User/:fname/:lname' element={<User/>}/>
      <Route exact path ='*' element={<Error/>}/>
      <Route exact path ='*' element={<ListComp/>}/>
      <Route exact path ='/Search' element ={<Search/>}/>
     
   

        
 </Routes>
 
 <NavLink to ='/'>About Us new1</NavLink>
 <NavLink to ='/Contact'>Contact Us New2</NavLink>
 <NavLink to ='/User'>This is Users page</NavLink>
 <NavLink to ='/User'>This is Users page</NavLink>
 <NavLink to ='/Search'>This is Search page</NavLink>


 </BrowserRouter>



 
  
 
 {/* <Heading/>
 <Card/> */}
 </>
   
  )
};

export default App7;