import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import Sign from './Sign/Sign'

const Protected = () => {
    // if(localStorage.getItem('email')?<Outlet/>:<Sign/>)
  return (
    <div>
      {localStorage.getItem('email')?<Outlet/>:<Navigate to='/sign'/>}
    </div>
  )
}

export default Protected
