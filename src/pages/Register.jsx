import React, { useState } from 'react'
import { registerUser } from '../api/authApi';
import Input from '../components/Input';

const Register = () => {

  const [form,setForm] = useState({
    userName:"",
    email:"",
    mobile:"",
    password:""
  });

  const handleChange = (e)=>{
    setForm({...form , [e.target.name]:e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await registerUser(form);
      console.log("Registration successfull");
    }
    catch(error){
      console.error("Registration error");
    }

  }

  return (
    <div className='min-h-screen items-center justify-center px-6 flex flex-col'>
      <div>
        <h1 className='text-4xl font-semibold text-center mb-6 mt-6'>Register</h1>
      </div>
      <div className='w-full max-w-md  rounded-md shadow-sm'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <Input label="UserName" name="userName" value={form.userName} type="text" onChange={handleChange} placeholder="Enter Username"></Input>
            <Input label="Email" name="email" value={form.email} type="email" onChange={handleChange} placeholder="you@example.com"></Input>
            <Input label="Mobile" name="mobile" value={form.mobile} type="text" onChange={handleChange} placeholder="Your mobile no."></Input>
            <Input label="Password" name="password" value={form.password} type="password" onChange={handleChange} placeholder="Enter Password"></Input>
            <button type='submit' className='w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:font-bold transition duration-500 cursor-pointer'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
