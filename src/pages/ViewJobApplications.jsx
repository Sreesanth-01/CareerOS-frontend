import React, { useEffect, useState } from 'react'
import { getJobApplications } from '../api/jobApi';

const ViewJobApplications = () => {
    const [jobData,setJobData] = useState([]);

    useEffect(()=>{
        fetchJobApplications();
    },[]);

    const fetchJobApplications = async() =>{
        try{
            const res = await getJobApplications();
            console.log(res.data);
            setJobData(res.data);
            console.log(Array.isArray(jobData));
            console.log("Retreived jobs successfully");
        }
        catch(error){
            console.log("Error: ",error);
        }
    }
  return (
    <div>
        <h1>Job List</h1>
        <ul>
            {jobData.map((job)=>(//companyName, jobRole, status
                <li key={job.id}>
                    <div>
                        <h3>Company: {job.companyName}</h3>
                        <h4>Role: {job.jobRole}</h4>
                        <h5>Status: {job.status}</h5>
                        <p>Applied Date: {job.appliedDate}</p>
                        <p>Description: {job.notes}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ViewJobApplications
