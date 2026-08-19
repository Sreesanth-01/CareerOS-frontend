import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Navbar = () => {
  
  const {isAuthenticated,logout} = useContext(AuthContext);
  console.log("Navbar authentication:", isAuthenticated);

  return (
    <nav className='sticky w-full bg-black text-white border shadow-md'>
      {!isAuthenticated ? (
        <div>
          <Link to="/register">Register |</Link>
          <Link to="/login">Login</Link>
        </div>
      ) : (
        <div>
          <Link to="/AddjobApplication">AddJobs |</Link>
          <Link to="/ViewjobApplications">JobList |</Link>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
