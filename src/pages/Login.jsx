import React, { useState } from 'react'
import Input from '../components/Input'
import { login } from '../api/authApi';

const Login = () => {
  const [form,setForm] = useState({
    email:"",
    password:""
  });

  const handleChange = (e) =>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    try{
      console.log(form);
      const res = await login(form);
      console.log("Login successful");
    }
    catch(error){
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="email" value={form.email} label="Email:" onChange={handleChange} placeholder="Enter email" type='email'></Input>
        <Input name="password" value={form.password} label="Password:" onChange={handleChange} placeholder="******" type='password'></Input>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login
