import React, { useState } from 'react'
import Input from '../components/Input'
import { addJobApplication } from '../api/jobApi';

const JobApplications = () => {

    const [formData,setFormData] = useState({
        company : "",
        role : "",
        salary : 0.0,
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
            const res = await addJobApplication(formData);
            console.log(res);
        }
        catch(error){
            console.log(error.message||error);
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="company" value={formData.company} label="Company" placeholder="Company Name" onChange={handleChange}></Input>
        <Input name="role" value={formData.role} label="Role" placeholder="Job Role" onChange={handleChange}></Input>
        <Input name="salary" value={formData.salary} label="Salary" placeholder="Salary" onChange={handleChange}></Input>
        <select value={formData.status} onChange={handleChange}>
            <option value="saved">Saved</option>
            <option value="applied">Applied</option>
            <option value="assessment">Assessment</option>
            <option value="interview">Interview</option>
            <option value="offer_recieved">Offer Recieved</option>
            <option value="accepted">Accepted</option>
            <option value="rejected">Rejected</option>
            <option value="withdrawn">Withdrawn</option>
            <option value="on_hold">On Hold</option>
        </select>
        <Input name="appliedDate" value={formData.appliedDate} label="Applied Date" placeholder="Applied Date" onChange={handleChange}></Input>
        <Input name="notes" value={formData.notes} label="Notes" placeholder="Add notes" onChange={handleChange}></Input>
        <button type='submit'>Add Application</button>
      </form>
    </div>
  )
}

export default JobApplications
