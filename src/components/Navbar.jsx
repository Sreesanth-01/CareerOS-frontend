import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='sticky w-full bg-black text-white border shadow-md'>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/AddjobApplication">AddJobs</Link>
        <Link to="/ViewjobApplications">JobList</Link>
    </nav>
  )
}

export default Navbar
