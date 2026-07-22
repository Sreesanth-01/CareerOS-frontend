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
            setJobData(res.data);
            console.log("Retreived jobs successfully");
            console.log(jobData);
        }
        catch(error){
            console.log("Error: ",error);
        }
    }
  return (
    <div>
        <h1>Jobs</h1>
    </div>
  )
}

export default ViewJobApplications
