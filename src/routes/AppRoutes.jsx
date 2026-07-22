import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AddJobApplication from '../pages/AddJobApplication'
import ViewJobApplications from '../pages/ViewJobApplications'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Register />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/AddjobApplication' element={<AddJobApplication />}></Route>
      <Route path='/ViewjobApplications' element={<ViewJobApplications />}></Route>
    </Routes>
  )
}

export default AppRoutes
