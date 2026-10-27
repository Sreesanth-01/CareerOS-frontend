import React, { useEffect, useState } from 'react'
import { deleteJobApplication, getJobApplications } from '../api/jobApi';
import { useNavigate } from 'react-router-dom';
import MyApplicationCard from '../components/MyApplicationCard';
import JobDetailsModal from '../components/JobDetailsModal';

const ViewJobApplications = () => {
    const [jobData,setJobData] = useState([]);
    const navigate = useNavigate();

    const [selectedJob,setSelectedJob] = useState(null);

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

    const editJob = async(id)=>{
        navigate(`/EditJobApplication/${id}`);
    }

    const deleteJob = async(id) =>{
        try {
            const res = await deleteJobApplication(id);
            fetchJobApplications();
            console.log(res);
        } catch (error) {
            console.log("Error: ",error);
        }
    }

  return (
    <div className='min-h-screen bg-gray-50 py-10 px-4'>
        <div className='max-w-3xl mx-auto mb-8'>
            <h1 className='text-3xl font-semibold mb-1'>My Applications</h1>
            <p className='text-sm text-gray-500'>View and manage your job applications</p>
        </div>
        
        {jobData.length > 0 ?(
        <div className='w-full max-w-2-xl'>
            <ul className='space-y-5'>
                {jobData.map((job)=>(
                    <div onClick={()=>setSelectedJob(job)}>
                        <MyApplicationCard application={job}></MyApplicationCard>
                        <div className="border-t border-gray-100" />
                    </div>
                ))}
            </ul>
        </div>
        ) : (
            <div className='text-center align-middle'>
                <p>No applications yet. Add an application to get started</p>
               
            </div>
        )}

         {/* details modal */}
        {selectedJob && (
            <JobDetailsModal application={selectedJob} onClose={()=>setSelectedJob(null)} ></JobDetailsModal>
        )}
    </div>
  )
}

export default ViewJobApplications
