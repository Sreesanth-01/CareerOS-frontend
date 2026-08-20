import React, { useState } from 'react'
import Input from '../components/Input'
import { addJobApplication } from '../api/jobApi';
import { useNavigate } from 'react-router-dom';

const AddJobApplication = () => {

    const navigate = useNavigate();
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
    <div>
      <form onSubmit={handleSubmit}>
        <Input name="companyName" value={formData.companyName} label="Company" placeholder="Company Name" onChange={handleChange}></Input>
        <Input name="jobRole" value={formData.jobRole} label="Role" placeholder="Job Role" onChange={handleChange}></Input>
        <Input name="salary" value={formData.salary} label="Salary" placeholder="Salary" type='number' onChange={handleChange}></Input>
        <select name="status" value={formData.status} onChange={handleChange}>
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
        <Input name="appliedDate" value={formData.appliedDate} label="Applied Date" type='date' placeholder="Applied Date" onChange={handleChange}></Input>
        <Input name="notes" value={formData.notes} label="Notes" placeholder="Add notes" onChange={handleChange}></Input>
        <button type='submit'>Add Application</button>
      </form>
      {/* <button onClick={()=>navigate("/viewJobApplications")}>view jobs</button> */}
    </div>
  )
}

export default AddJobApplication
