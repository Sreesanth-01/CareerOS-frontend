import React, { useContext, useState } from 'react'
import Input from '../components/Input'
import { loginApi } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { toast } from 'react-toastify';

//Implement login with mobile option too
const Login = () => {

  const {login} = useContext(AuthContext);

  const navigate = useNavigate();

  const [form,setForm] = useState({
    email:"",
    password:""
  });

  const [errors,setErrors] = useState({});

  const validateForm = () =>{
     const newErrors = {};

     if(!form.email){
      newErrors.email="Email is required";
     }
     else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
      newErrors.email="Please Enter a valid email address";
     }

     if(!form.password){
      newErrors.password="Password is required";
     }

     return newErrors;
  }

  const handleChange = (e) =>{
    setForm({...form,[e.target.name]:e.target.value});
    setErrors({...errors,[e.target.name]:""});
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);
    if(Object.keys(validationErrors).length>0){
      toast.error("Please correct the errors in the form.");
      return;
    }

    try{
      // console.log(form);
      const res = await loginApi(form);
      // localStorage.setItem("token",res.data.token);
      // console.log(res.data.token);
      toast.success("Login successful.");
      login(res.data.token,form.email,res.data.userName);

      navigate("/Dashboard");
    }
    catch(error){
      toast.error("Login failed. Enter correct credentials or try again later.");
      console.error(error);
    }
  }


  return (
    <div className='min-h-screen items-center justify-center px-6 flex flex-col'>
      <div>
        <h1 className='text-4xl font-semibold text-center mb-6 mt-6'>Login</h1>
      </div>
      <div className='w-full max-w-md  rounded-md shadow-sm'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <Input name="email" value={form.email} label="Email:" onChange={handleChange} placeholder="Enter email" type='email'></Input>
          {errors.email && <p className=' text-sm text-red-600'>{errors.email}</p>}
          <Input name="password" value={form.password} label="Password:" onChange={handleChange} placeholder="******" type='password'></Input>
          {errors.password && <p className=' text-sm text-red-600'>{errors.password}</p>}

          <button type='submit' className='w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:font-bold transition duration-500 cursor-pointer'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
