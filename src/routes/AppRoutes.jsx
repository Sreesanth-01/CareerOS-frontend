import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import JobApplications from '../pages/JobApplications'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Register />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/jobApplications' element={<JobApplications />}></Route>
    </Routes>
  )
}

export default AppRoutes
