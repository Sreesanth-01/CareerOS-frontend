import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editJobApplication, getJobApplicationById } from '../api/jobApi';
import Input from '../components/Input';

const EditJobApplication = () => {
    const {id} = useParams();
    const [formData,setFormData] = useState({
        companyName:"",
        jobRole:"",
        salary:0,
        status:"",
        appliedDate:"",
        notes:""
    })

    const navigate = useNavigate();

    useEffect(()=>{
       fetchApplications();
    },[id])

    const fetchApplications = async() =>{
        try {
            const res = await getJobApplicationById(id);
            setFormData({
                companyName : res.data.companyName,
                jobRole : res.data.jobRole,
                salary : res.data.salary,
                status : res.data.status,
                appliedDate : res.data.appliedDate,
                notes : res.data.notes
            })
            // console.log("Salary:", formData.salary);
            // console.log("Type:", typeof formData.salary);
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) =>{
        // console.log("name:", e.target.name);
        // console.log("value:", e.target.value);
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const res = await editJobApplication(id,formData);
            navigate("/ViewJobApplications");

        } catch (error) {
            console.error(error);
        }
    }
    // console.log("FORM:", formData);
    // console.log("SALARY:", formData.salary);
    // console.log("SALARY TYPE:", typeof formData.salary);

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
        <button type='submit'>Edit Application</button>
      </form>
    </div>
  )
}

export default EditJobApplication
