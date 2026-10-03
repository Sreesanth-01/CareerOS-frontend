import React, { useContext, useEffect, useState } from 'react'
import ApplicationCard from '../components/ApplicationCard'
import { useNavigate } from 'react-router-dom'
import { getJobApplications } from '../api/jobApi';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {

    const navigate = useNavigate();

    const {userName} = useContext(AuthContext);

    const [jobList,setJobList] = useState([]);

    const interviews = jobList.filter((e)=>e.status==="INTERVIEW");
    const offers = jobList.filter((e)=>e.status==="OFFER_RECIEVED");
    const pending = jobList.filter((e)=>e.status==="ON_HOLD");

    const sortedListByDate = jobList.toSorted((a,b)=> new Date(b.appliedDate) - new Date(a.appliedDate)).slice(0,3); //toSorted() returns a new copy while sort() modifies og.

    const chartData = jobList.reduce((acc,app)=>{
        const date = app.appliedDate;

        const existing = acc.find((item)=> item.date===date);

        if(existing){
            existing.count +=1;
        }
        else{
            acc.push({date,count:1});
        }

        return acc;
    },[]);

    chartData.sort((a,b)=> new Date(b.date)-new Date(a.date));

    

     useEffect(()=>{
        fetchJobApplications();
    },[]);
    
    const fetchJobApplications = async() =>{
        try{
            const res = await getJobApplications();
            setJobList(res.data);
        }
        catch(error){
            console.log("Error: ",error);
        }
    }
  return (
    <div className='min-h-screen bg-gray-50 px-6 py-10 max-w-6xl mx-auto space-y-8'>
        {/* Welcome text area */}
        <div className='mb-8'>
            <h3 className='text-2xl font-bold'>
                Hello <span>{userName || `User`}</span>!
            </h3>
            <p className='text-gray-500 mt-2'>Take a look at an overview of your job search</p>
        </div>

        {/* Summary cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
                <p className='text-sm text-gray-500'>Total Applications</p>
                <p className='text-2xl font-semibold mt-2'>{jobList.length}</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
                <p className='text-sm text-gray-500'>Interviews</p>
                <p className='text-2xl font-semibold mt-2'>{interviews.length}</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
                <p className='text-sm text-gray-500'>Offers</p>
                <p className='text-2xl font-semibold mt-2'>{offers.length}</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
                <p className='text-sm text-gray-500'>Pending</p>
                <p className='text-2xl font-semibold mt-2'>{pending.length}</p>
            </div>
           
        </div>

        {/* Applcation area */}
        <div className='flex gap-6'>
            {/* Chart section */}
            <div className='flex-1 bg-white p-6 rounded-lg shadow-sm h-64'>
                Chart
            </div>

            {/* Status section */}
            <div className='w-80 bg-white p-6 rounded-lg shadow-sm h-64'>
                Status
            </div>
        </div>

        {/* Recent applications */}
        <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold mb-5'>Recent Applications</h2>
                <button onClick={()=>navigate("/ViewjobApplications")}className='border rounded-md px-2 mb-5 hover:cursor-pointer hover:bg-gray-100 transition'>View All</button>
            </div>
            <div>
                {sortedListByDate.map((job)=>(
                    <div>
                        <ApplicationCard company={job.companyName} role={job.jobRole} status={job.status} date={job.appliedDate} ></ApplicationCard>
                        <div className='border-t text-gray-100 my-3'></div>
                    </div>
                    
                ))}
            </div>
        </div>

        {/* Upcoming */}
        <div className='w-full bg-white p-6 rounded-lg shadow-sm '>
        <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold mb-5'>Upcoming list</h2>
            <button onClick={()=>navigate("/AddJobApplication")} className='border rounded-md px-2 mb-5 hover:cursor-pointer hover:bg-gray-100 transition'>Add More</button>
        </div>
            <div>
                <ApplicationCard company="Google" role="Software Engineer" status="Interview" date="Sep 20, 2026"></ApplicationCard>
                <div className='border-t border-gray-100 my-4'></div>
                <ApplicationCard company="Microsoft" role="SDE" status="Applied" date="Sep 18, 2026"></ApplicationCard>
                <div className='border-t border-gray-100 my-4'></div>
                <ApplicationCard company="Zoho" role="Backend Developer" status="Rejected" date="Sep 15, 2026"></ApplicationCard>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
