import React, {useState, useEffect } from 'react';
import axios from 'axios';

const StateWise = () => {
  const [data , setData] = useState(['']);

   const getCovidData = async ()=> {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    const actualData = await res.json();
   
    
    setData(...actualData[StateWise].actualData);
   }
   

    useEffect(()=>{
        getCovidData();
    } ,[]);
  return (
    <>
  
    <div className='container-fluid mt-5'>
    <div className='main-heading'>
         <h1 className='mb-5 text-center'><span className="font-weight-bold">India</span> Covid-19 Dashboard</h1>
    </div>
    <div className="table-responsive">
        <table className="table table:hover">
           <thead className="thead-dark">
           <tr>
              <th>State</th>
              <th>confirmed</th>
              <th>recovered</th>
              <th>death</th>
              <th>active</th>
              <th>updated</th>
           </tr>

            </thead>
            <tbody>
            {data.map((currElem , ind)=>{
               return(
                <tr key={ind}> 
             <th>{currElem.state}</th>
              <td>confirmed</td>
              <td>recovered</td>
              <td>death</td>
              <td>active</td>
              <td>updated</td>
              </tr>

               )
            })
            };
          

            </tbody>

    </table>

    </div>

    </div>
    
    </>
  )
};

export default StateWise;
