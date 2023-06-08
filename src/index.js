import React from "react";
import  ReactDOM  from "react-dom/client";

// import "./index.css"
// import App3 from "./App3";

// import App6 from "./App6";
// import A1 from "./A1";
// import App7 from "./App7"
import App8 from "./App8";
import { BrowserRouter } from "react-router-dom";


import "../src/Component/statewisedata/Statewise.css";
const root =ReactDOM.createRoot(document.getElementById('root'));

// function ncard(value){
//   return(
//     <Card
//   imgsrc={value.imgsrc}
//   title={value.title}
//   sname={value.sname}
//   link={value.link}
// />

//   )
// }
    root.render(  
         <>

       {/* <h1 className="heading_style">List of top Five Netflix Series in 2020</h1> */}
       <BrowserRouter>
        <App8/>
        </BrowserRouter>

       
        </> 
    
);










// root.render(
//     <>
//         <h1 className="heading_style">List of top Five Netflix Series in 2020</h1>
//         {/* {Sdata.map(ncard)} */}

//          {Sdata.map((value) => {
//           return (
//                    <Card
//                      id={value.id}
//                     imgsrc={value.imgsrc}
//                     title={value.title}
//                     sname={value.sname}
//                      link={value.link}
//                      />
//           );
//          })};
//     </>
// )