// import React from "react";
// import { ReactDOM } from "react-dom/client";
// import Netflix from "./Netflix";
// import Amazon from "./Amazon";


// let favseries = 'netflix';



// const App3 = () => {
//  if(favseries === "netflix"){
//     return(
//         <Netflix/>
//     )
//  }else{
//     return(
//        <Amazon/>
//     )
//  };
// }
// // const App3 =() => {
// //     <>
// //         {(favseries = 'netflix') ? <Netflix/> : <Amazon/>}
// //     </>
// // };
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const currTime = new Date().toLocaleTimeString();



const  App3= () =>{
    const state = useState();
    const currTime = new Date().toLocaleTimeString();
    const [count ,  setCount] = useState();
    const[cTime,setTime] =useState(currTime);
    


    const incNum=()=>{
      const currTime = new Date().toLocaleTimeString();
        setTime(currTime);
      //   setCount(count+1);
    }
  setInterval(incNum,1000);

  return(
<>
    <h1>{count}</h1>
    <button onClick={incNum}>Increment</button>
    <h1>{cTime}</h1>
   <button className="btn btn-success">Hii</button>
    </>
  )
}

export default App3;


























// import {add , sub , mult} from './Calc';

// const currDate = new Date().toLocaleTimeString();

// function App3 (){
//     return(
//         <>
//         <h1>   Vishal    </h1>
//         <ul>
//          <li>     The sum of two no is {add(10,4)}   </li>
//          <li>     The sub of two no is {sub(10,4)}   </li>
//          <li>     The mult of two no is {mult(10,4)}   </li>
//         </ul>
// <h1>{currDate}</h1>
// </>
//     )
// };

// export default App3;
