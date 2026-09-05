import React, { useState } from 'react'
import Input from '../components/Input'
import { addJobApplication } from '../api/jobApi';
import { useNavigate } from 'react-router-dom';

const AddJobApplication = () => {

    // const navigate = useNavigate();
    const [formData,setFormData] = useState({
        companyName : "",
        jobRole : "",
        salary : 0,
        status : "",
        appliedDate : "",
        notes : ""
    });

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            console.log("Hitting api...");
            const res = await addJobApplication(formData);
            console.log(formData);
            console.log(res);
        }
        catch(error){
            console.error(error);
        }
    }

  return (
    <div className='min-h-screen items-center justify-center px-6 flex flex-col'>
      <div>
        <h1 className='text-center text-2xl font-semibold m-6'>Add Job Application</h1>
      </div>
      <div className='w-full max-w-md rounded-md shadow-sm'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <Input name="companyName" value={formData.companyName} label="Company" placeholder="Company Name" onChange={handleChange}></Input>
          <Input name="jobRole" value={formData.jobRole} label="Role" placeholder="Job Role" onChange={handleChange}></Input>
          <Input name="salary" value={formData.salary} label="Salary" placeholder="Salary" type='number' onChange={handleChange}></Input>
          <div className='flex flex-col gap-1'>
            <label htmlFor='status' className='font-semibold'>Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-black-500 focus-border-black-500'>
              <option value="SAVED">Saved</option>
              <option value="APPLIED">Applied</option>
              <option value="ASSESSMENT">Assessment</option>
              <option value="INTERVIEW">Interview</option>
              <option value="OFFER_RECIEVED">Offer Recieved</option>
              <option value="ACCEPTED">Accepted</option>
              <option value="REJECTED">Rejected</option>
              <option value="WITHDRAWN">Withdrawn</option>
              <option value="ON_HOLD">On Hold</option>
          </select>
        </div>
        <Input name="appliedDate" value={formData.appliedDate} label="Applied Date" type='date' placeholder="Applied Date" onChange={handleChange}></Input>
        <div className='flex flex-col gap-1'>
          <label htmlFor='notes' className='font-medium'>Notes</label>
          <textarea name='notes' value={formData.notes} placeholder='Your notes...' onChange={handleChange} className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-black-500 focus-border-black-500'></textarea>
        </div>
        <button type='submit' className='w-full bg-black text-white py-2 px-4 rounded-md font-medium hover:font-bold transition duration-500 cursor-pointer'>Add Application</button>
      </form>
    </div>
      {/* <button onClick={()=>navigate("/viewJobApplications")}>view jobs</button> */}
    </div>
  )
}

export default AddJobApplication
