import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const NavBar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className='navbar'>
        {/* <span className="logo">Welcome to <span style={{color: "red" ,fontSize:"35px"}}>C</span>hatNova App</span> */}
      <span className='logo'>ChatNova</span>
      <div className='user'><img src={currentUser.photoURL} alt=''/>
      <span>{currentUser.displayName}</span>
      <button  onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default NavBar
{/* <span style={{color: "red" ,fontSize:"35px"}}>C</span>hatNova</span> */}