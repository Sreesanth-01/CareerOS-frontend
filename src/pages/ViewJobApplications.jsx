import React, { useEffect, useState } from 'react'
import { deleteJobApplication, getJobApplications } from '../api/jobApi';
import { useNavigate } from 'react-router-dom';

const ViewJobApplications = () => {
    const [jobData,setJobData] = useState([]);
    const navigate = useNavigate();

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
    <div className='min-h-screen flex flex-col items-center justify-center'>
        <div>
            <h1 className='text-2xl font-semibold text-center'>Job List</h1>
        </div>
        <div className='w-full max-w-2-xl'>
            <ul className='flex flex-col gap-4'>
                {jobData.map((job)=>(
                    <li key={job.id}>
                        <div className='bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-200 p-6'>
                            <div className='flex items-start justify-between gap-4'>
                                <div>
                                    <h3 className='text-xl font-bold text-gray-900'>{job.companyName}</h3>
                                    <p className='text-gray-500 mt-1'>{job.jobRole}</p>
                                </div>


                                <span className='shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700'>{job.status}</span>
                            </div>
                            
                            <div className='mt-2 grid grid-cols-2 gap-4'>
                                <div>
                                    <p className='text-sm font-medium text-gray-400 uppercase tracking-wide'>Salary</p>
                                    <p className='mt-1 text-sm font-semibold text-gray-800'>₹{job.salary}</p>
                                </div>

                                <div>
                                    <p className='text-sm font-medium text-gray-400 uppercase tracking-wide'>Applied Date</p>
                                    <p className='mt-1 text-sm font-semibold text-gray-800'>{job.appliedDate}</p>
                                </div>
                            </div>

                            {job.notes && (
                                <div className='mt-5 bg-gray-100 rounded-xl p-4'>
                                    <p className='text-sm font-medium text-gray-400 uppercase tracking-wide mb-1'>Notes</p>
                                    <p className='test-sm text-gray-600 leading-relaxed'>{job.notes}</p>
                                </div>
                            )}

                            <div className='flex justify-end gap-3 mt-6'>
                                <button onClick={()=>editJob(job.id)} className='px-4 py-2 text-sm font-medium text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition duration-200'>Edit</button>
                                <button onClick={()=>deleteJob(job.id)} className='px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition duration-200'>Delete</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ViewJobApplications
