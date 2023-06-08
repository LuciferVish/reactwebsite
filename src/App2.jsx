  import React,{useState} from 'react';
  import './index.css';


     const App2 =()=> {

    const [FullName , setFullName]= useState({
        fname : "",
        lname : "",
        email : "",
        phone : "",

    });

    const inputEvent =(event)=>{
        const {name , value} = event.target;

        setFullName((preValue) =>{
           return  {
            ...preValue,
            [name] : value,
           };

        });
};

    const onSubmits=(event)=>{
        event.preventDefault();
        alert('Form is submitted')

    };

    return(
        <>
       <div>
            <h1>Hello {FullName.fname} {FullName.lname}
            </h1>
            <p>{FullName.email}</p>
            <p>{FullName.phone}</p>
            <form onSubmit={onSubmits}>
     <input
     type='text'
     onChange={inputEvent}
     placeholder='Enter your name 📛'
     name ="fname"
     value=  {FullName.fname}
     >
     </input>
     <input
     type='text'
     onChange={inputEvent}
     placeholder='Enter your last name 📛'
     name ="lname"
     value=     {FullName.lname}
     >
     </input>
     <input
     type='email'
     onChange={inputEvent}
     placeholder='Enter your email 📫'
     name ="email"
     value=     {FullName.email}
     >
     </input>
     <input
     type='number'
     onChange={inputEvent}
     placeholder='Enter your phone number ☎️'
     name ="phone"
     value=     {FullName.phone}
     >
     </input>
     <button type='submit' class="btn btn-info">Click Me 👍</button>

     </form>


       </div>
</>
    )
};

export default App2;