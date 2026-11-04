import React, { useEffect, useState } from 'react'
import { deleteJobApplication, getJobApplications } from '../api/jobApi';
import { useNavigate } from 'react-router-dom';
import MyApplicationCard from '../components/MyApplicationCard';
import JobDetailsModal from '../components/JobDetailsModal';
import { toast } from 'react-toastify';
import FiltersModal from '../components/FiltersModal';
import { Filter } from 'lucide-react';

const ViewJobApplications = () => {
    const [jobData,setJobData] = useState([]);
    const navigate = useNavigate();

    const [showFilters, setShowFilters] = useState(false);

    const [selectedJob,setSelectedJob] = useState(null);

    const [filters,setFilters] = useState({
        filterBy : "none",
        sortBy : "none",
        status : "",
        fromDate : "",
        toDate : ""
    });

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
            toast.success("Deleted Job Application successfully.");
            setSelectedJob(null);
            fetchJobApplications();
            console.log(res);
        } catch (error) {
            toast.error("Couldn't delete application, Please try later");
            console.log("Error: ",error);
        }
    }

    const applyFilters = async({filterBy, sortBy, status, fromDate, toDate}) =>{
       setFilters({filterBy,sortBy,status,fromDate,toDate});
    }

    const filteredJobs = jobData.filter((job)=>{
        if(filters.filterBy === "status"){
            return job.status === filters.status;
        }

        if(filters.filterBy === "date"){
            const appliedDate = job.appliedDate;
            if(filters.fromDate && appliedDate <filters.fromDate){
                return false;
            }
            if(filters.toDate && appliedDate > filters.toDate){
                return false;
            }
            return true;
        }
        return true; //if both no filter, take all. 
    });

    const sortedFilteredJobs = filteredJobs.sort((a,b)=>{
        const dateA = new Date(a.appliedDate);
        const dateB = new Date(b.appliedDate);

        return filters.sortBy === "asc" ? dateA - dateB : dateB - dateA;
    });

    const displayedJobs = filters.sortBy === "none" ? filteredJobs : sortedFilteredJobs ;

  return (
    <div className='min-h-screen bg-gray-50 py-10 px-4'>
        <div className='flex items-center justify-between'>
            <div className='w-full mb-8'>
                <h1 className='text-3xl font-semibold mb-1'>My Applications</h1>
                <p className='text-sm text-gray-500'>View and manage your job applications</p>
            </div>
            <div className='cursor-pointer rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900'>
                <button className='cursor-pointer hover:text-gray-500' onClick={()=>setShowFilters(!showFilters)}><Filter/></button>
            </div>
        </div>
        
        {displayedJobs.length > 0 ?(
        <div className='w-full max-w-none'>
            <ul className='space-y-5'>
                {displayedJobs.map((job)=>(
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
            <JobDetailsModal application={selectedJob} onClose={()=>setSelectedJob(null)} onEdit={editJob} onDelete={deleteJob} ></JobDetailsModal>
        )}
        {showFilters && (
            <FiltersModal  onClose={()=>setShowFilters(false)} applyFilters={applyFilters}/>
        )}
    </div>
  )
}

export default ViewJobApplications
