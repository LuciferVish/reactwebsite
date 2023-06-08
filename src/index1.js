import React from 'react';
import  ReactDOM  from 'react-dom';
// import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <>
    <h1>Thapa Technical Netflix Pick</h1>

    <p> List of 5 Best Series</p>
      <ol>
        <li>Dark</li>
        <li>Extra Curricular</li>
        <li>My Love</li>
        <li>Sacred games</li>
        <li>Avtar</li>



      </ol>
</>
);

import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let currdate = new Date(2023 ,5 ,22 ,21);
currdate = currdate.getHours();
let greeting ='';
const cssStyle = {};

if(currdate>=1 && currdate<12){
    greeting ='Good Morning' ;
    cssStyle.color = "green";
}else if(currdate>=12 && currdate<19){
  greeting = 'Good Afternoon' ;
  cssStyle.color = "orange";
} else{
  greeting = 'Good Night' ;
  cssStyle.color = "blue";
}


root.render(
  <>
     <h1>
      Hello Sir , Today is  <span style = {cssStyle}>{greeting}</span>
     </h1>
    
  </>
)