import React from 'react'
// import { NavLink} from 'react-router-dom'
import './navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = (props) => {
  return (
    <div className="navbar">
   
    <div className="logo">
      HP__<span>E-Laundry</span>
    </div>
    <div className="items">
     <ul>
      <NavLink  to='/'>Home</NavLink>
      <NavLink to='/promise'>Promise</NavLink>
      {localStorage.getItem('email')?'':<NavLink to='/sign'>Sign</NavLink>}
      {localStorage.getItem('email')?<NavLink to='/sign' onClick={()=>{localStorage.clear(); props.setcount(props.count+1)}}>Logout</NavLink>:<NavLink  to='/login'>Login</NavLink>}

     </ul>
    </div>
   </div>
  )
}

export default Navbar
