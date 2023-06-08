// import React from "react";


// function Card(props){
//     return(
//       <>
//       <div className="cards">
//       <div className="card">
//       <img src={props.imgsrc} alt="myPic" className="card_img"/>
//       <div className="card_info">
//       <span className="card_category">{props.title} </span>
//       <h3 className="card_title">{props.sname}</h3>
      
//       <a href={props.link} target="_blank">
//         <button>Watch Now 😄</button>
//       </a>
//       </div>
//       </div>
//       </div>
//       </>
//     )
//   }
//   export default Card;

import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Card = () => {
  const [num , setNum]= useState();
  const [name , setName] =useState();
  const [moves , setMoves] = useState();

  useEffect(()=>{
    // alert('hii');
    async function getData(value) {
      const res = axios.get('https://pokeapi.co/api/v2/version/25/').then(res =>{
        console.log(res.data);
      setName(res.data.name);
      setMoves(res.data.moves);
      });
     
     
    }
    getData();
  })

  return (
    <>
    <h1>you choose value <span style={{color:'red'}}>{num} from list </span></h1>
    <h1>My Name is <span style={{color:'red'}}> {name} from list</span></h1>
    <h1>i have<span style={{color:'red'}}> {moves} moves</span></h1>
        <select value={num} onChange={(event)=>{
           setNum(event.target.value);
        }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

        </select>
    </>
  )
};
export default Card;