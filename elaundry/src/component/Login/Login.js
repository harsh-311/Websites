import React from 'react'
// import './components.css'
// import '../Sign/sign.css'
import {NavLink,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Login = (props) => {
    
    const navigate=useNavigate()
   
    const {register,handleSubmit,reset}=useForm()

    const submit=async(data)=>{
      console.log(data)
        localStorage.setItem('email',data.email)
        // props.setdata(data)
        const response = await fetch('/login', {
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
          if(result.message==='User Login Successfully')
          {
              reset()
              props.setcount(!props.count)
              navigate('/')
            
          } // parses JSON response into native JavaScript objects
    }
  return (
    <>
    <div className="container4">
    <div className="form" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
     <h2 style={{marginRight:'100px'}}>Login</h2>
     <form action="" onSubmit={handleSubmit(submit)}>
     
        <label htmlFor="email">
            <i className="zmdi zmdi-email"></i>
            <input type='text'  id='email' placeholder='Your email' {...register('email')}/>
        </label>
        
        <label htmlFor="password">
            <i className="zmdi zmdi-lock"></i>
            <input type='password'  id='password' placeholder='Password' {...register('password')} />
        </label>
       
        
        <button className='btn'  >Login In</button>
     </form> 
    </div>
    <div className="img">
     <img src="https://img.freepik.com/free-vector/dads-housework-abstract-concept-illustration_335657-611.jpg?w=740&t=st=1685423554~exp=1685424154~hmac=3db09c50ff87d77e3179c74e1b1eb09cd6977e0f910ad5eaa8774ddd60636c1a" alt="" />
     <NavLink to='/sign'>Create a new account..</NavLink>
    </div>
    </div>
    </>
  )
}

export default Login
