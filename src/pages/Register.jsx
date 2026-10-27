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

  const [errors, setErrors] = useState({});

  const validateForm = () =>{
    const newErrors = {};

    if(!form.userName){
      newErrors.userName = "Username is required";
    }

    if(!form.email){
      newErrors.email = "Email is required";
    }
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
      newErrors.email = "Enter a valid email address";
    }

    if(form.mobile.length>0 && form.mobile.length!=10){
      newErrors.mobile = "Enter a valid 10 digit mobile number"
    }

    if(!form.password){
      newErrors.password = "Password is required";
    }
    else if(form.password.length<6){
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  }

  const handleChange = (e)=>{
    setForm({...form , [e.target.name]:e.target.value});
    setErrors({...errors,[e.target.name]:""});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if(Object.keys(validationErrors).length>0){
      return;
    }
    

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
        <h1 className='text-4xl font-semibold text-center mb-6 mt-6'>Create Account</h1>
      </div>
      <div className='w-full max-w-md  rounded-md shadow-sm'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <Input label="UserName" name="userName" value={form.userName} type="text" onChange={handleChange} placeholder="Enter Username"></Input>
            {errors.userName && <p className=' text-sm text-red-600'>{errors.userName}</p>}
            <Input label="Email" name="email" value={form.email} type="email" onChange={handleChange} placeholder="you@example.com"></Input>
            {errors.email && <p className=' text-sm text-red-600'>{errors.email}</p>}
            <Input label="Mobile(optional)" name="mobile" value={form.mobile} type="text" onChange={handleChange} placeholder="Your mobile no."></Input>
            {errors.mobile && <p className=' text-sm text-red-600'>{errors.mobile}</p>}
            <Input label="Password" name="password" value={form.password} type="password" onChange={handleChange} placeholder="Enter Password"></Input>
            {errors.password && <p className=' text-sm text-red-600'>{errors.password}</p>}
            <button type='submit' className='w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:font-bold transition duration-500 cursor-pointer'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
