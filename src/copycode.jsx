// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Heading, { List,vishal } from './Heading';
// import Parag from  './Parag'
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const page ="Vishal"; 
// const fname = "Vishal";
// const lname = "chhipa";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// const heading= {
//   color:"red",
//   textTransform: "capitalize"
// }
// root.render(
//   <>
//   <App/>
//   <Heading/>
// <Parag/>
// {<List/>}
//   <h1 className="heading">Thapa Technocal</h1>
//   <p>Please subscribe my channel my lucky number is {Math.random()} and {vishal}</p>
//   <h2>like the {page}</h2>
//   <h1 contentEditable="True">{`my name is ${fname} ${lname}`}</h1>
//   <p style={{color: "red", textTransform:"capitalize"}}>Current Date is ={currDate}</p>
//   <p>Current Time is ={currTime}</p>
//   <img src="https://picsum.photos/200/300" alt="Random Images"/>
//   {/* <img src="https://picsum.photos/200/300" alt="Random Images"/> */}
  
//   </>
// );

// // reportWebVitals();



// new 

// import React from 'react';
// import  ReactDOM  from 'react-dom';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//     <>
//     <h1>Thapa Technical Netflix Pick</h1>

//     <p> List of 5 Best Series</p>
//       <ol>
//         <li>Dark</li>
//         <li>Extra Curricular</li>
//         <li>My Love</li>
//         <li>Sacred games</li>
//         <li>Avtar</li>



//       </ol>
// </>
// );

// import React from 'react';
// import  ReactDOM  from 'react-dom';
// import './index.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// let currdate = new Date(2023 ,5 ,22 ,21);
// currdate = currdate.getHours();
// let greeting ='';
// const cssStyle = {};

// if(currdate>=1 && currdate<12){
//     greeting ='Good Morning' ;
//     cssStyle.color = "green";
// }else if(currdate>=12 && currdate<19){
//   greeting = 'Good Afternoon' ;
//   cssStyle.color = "orange";
// } else{
//   greeting = 'Good Night' ;
//   cssStyle.color = "blue";
// }


// root.render(
//   <>
//      <h1>
//       Hello Sir , Today is  <span style = {cssStyle}>{greeting}</span>
//      </h1>
    
//   </>
// )