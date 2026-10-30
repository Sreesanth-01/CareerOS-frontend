import React, { useState } from 'react'
import Input from '../components/Input'
import { addJobApplication } from '../api/jobApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJobApplication = () => {

    // const navigate = useNavigate();
    const [formData,setFormData] = useState({
        companyName : "",
        jobRole : "",
        salary : 0,
        status : "",
        appliedDate : "",
        location : "",
        workMode : "",
        notes : ""
    });

    const [errors,setErrors] = useState({});

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]: e.target.value});
        setErrors({...errors,[e.target.name]:""});
    }

    const validateForm = () =>{
      const newErrors = {};
      
      if(!formData.companyName){
        newErrors.companyName = "Company name is required."
      }
      if(!formData.jobRole){
        newErrors.jobRole = "Job Role is required."
      }
      if(!formData.salary || parseInt(formData.salary)<0){
        newErrors.salary = "Enter a valid Salary";
      }
      if(!formData.status){
        newErrors.status = "Choose any appropriate status."
      }

      return newErrors;
    }

    const handleSubmit = async(e) =>{
        
      e.preventDefault();
      const validationErrors = validateForm();
      setErrors(validationErrors);

      if(Object.keys(validationErrors).length>0){
        toast.error("Cannot Add Job Application, Please fix the errors.");
        return;
      }
      try{
          // console.log("Hitting api...");
          const res = await addJobApplication(formData);
          toast.success("Application added successfully.");
          setFormData({
            companyName : "",
            jobRole : "",
            salary : 0,
            status : "",
            appliedDate : "",
            location : "",
            workMode : "",
            notes : ""
          })
          // console.log(formData);
          // console.log(res);
      }
      catch(error){
        toast.error("Cannot Add Job Application, Please try later");
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
          {errors.companyName && <p className=' text-sm text-red-600'>{errors.companyName}</p>}
          <Input name="jobRole" value={formData.jobRole} label="Role" placeholder="Job Role" onChange={handleChange}></Input>
          {errors.jobRole && <p className=' text-sm text-red-600'>{errors.jobRole}</p>}
          <Input name="salary" value={formData.salary} label="Salary" placeholder="Salary" type='number' onChange={handleChange}></Input>
          {errors.salary && <p className=' text-sm text-red-600'>{errors.salary}</p>}
          <Input name="location" value={formData.location} label="Location" placeholder="Location" onChange={handleChange}></Input>
          {errors.status && <p className=' text-sm text-red-600'>{errors.status}</p>} 
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
          <label htmlFor='workMode' className='font-semibold'>Work Mode</label>
          <select name='workMode' value={formData.workMode} onChange={handleChange} className='w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-black-500 focus-border-black-500'>
            <option value="Not Specified">Not Specified</option>
            <option value="Remote">Remote</option>
            <option value="On-Site">On-Site</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
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
