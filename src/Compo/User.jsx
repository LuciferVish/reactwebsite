import React from 'react';
import { useParams , useLocation , useNavigate} from 'react-router-dom';

const User =()=>{
    const {fname , lname} =useParams();
    const Location = useLocation();
    const  navigate = useNavigate();
    console.log (navigate);

   return (
    <>
        <h1>Hii this is Users page and name is {fname} {lname}</h1>
        <p> My Current location is {Location.pathname}    </p>
        {Location.pathname === '/User/vishal/diggiwal' ? (<button onClick={() => navigate('Search')}>goback</button>) : null}
    </>
   )
};


export default User;