import React from 'react'
import './sign.css'
import {NavLink} from 'react-router-dom'
import {useForm} from 'react-hook-form'
const Sign = (props) => {
    

   
    const {register,handleSubmit,reset}=useForm()

    const submit=async(data)=>{
      console.log(data)
        localStorage.setItem('email',data.email)
        // props.setdata(data)
        const response = await fetch('userdetails', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data), // body data type must match "Content-Type" header
          });
          let result=await response.json()
          alert(result.message);
          if(result.message==='Data Store Successfully...')
          {
              reset()

          } // parses JSON response into native JavaScript objects
    }
  return (
    <>
    <div className="container4">
    <div className="form">
     <h2>Sign</h2>
     <form action="" onSubmit={handleSubmit(submit)}>
        <label htmlFor="name">
            <i className="zmdi zmdi-account"></i>
            <input type='text'  id='name' placeholder='Enter name' {...register('name')}/>
        </label>
        <label htmlFor="email">
            <i className="zmdi zmdi-email"></i>
            <input type='text'  id='email' placeholder='Your email' {...register('email')}/>
        </label>
        <label htmlFor="number">
            <i className="zmdi zmdi-phone-in-talk"></i>
            <input type='text'  id='phone' placeholder='Mobile number' {...register('number')}/>
        </label>
        <label htmlFor="password">
            <i className="zmdi zmdi-lock"></i>
            <input type='password'  id='password' placeholder='Password' {...register('password')} />
        </label>
       
        
        <button className='btn'  >Register</button>
     </form> 
    </div>
    <div className="img">
     <img src="https://img.freepik.com/free-vector/laundry-dry-cleaning-concept-illustration_114360-7651.jpg?w=740&t=st=1685423061~exp=1685423661~hmac=ecc3589775238017949a5e00a9d017b5d6a7b105295b0ae9c06385a128bcafcd" alt="" />
     <NavLink to='/login'>I'm already register..</NavLink>
    </div>
    </div>
    </>
  )
}

export default Sign
