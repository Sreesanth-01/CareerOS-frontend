import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <ToastContainer position='top-right' autoClose={3000} pauseOnHover={false}/>
    </div>
  )
}

export default App
