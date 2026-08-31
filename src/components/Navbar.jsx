import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Navbar = () => {
  
  const {isAuthenticated,logout} = useContext(AuthContext);
  console.log("Navbar authentication:", isAuthenticated);

  return (
    <nav className='bg-black text-white shadow-md flex items-center justify-between'>
      <div className='px-6'>
        <span className='text-xl font-semibold'>CareerOS</span>
      </div>
      {!isAuthenticated ? (
        <div className='flex gap-6 px-6 py-4'>
          <Link to="/register" className='font-medium hover:font-bold'>Register </Link>
          <Link to="/login" className='font-medium hover:font-bold'>Login</Link>
        </div>
      ) : (
        <div className='flex gap-6 px-6 py-4'>
          <Link to="/AddjobApplication" className='font-medium hover:font-bold'>AddJobs</Link>
          <Link to="/ViewjobApplications" className='font-medium hover:font-bold'>JobList</Link>
          <button onClick={logout} className='text-red-600 px-3 font-medium  rounded-md hover:cursor-pointer hover:font-bold'>Logout</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
