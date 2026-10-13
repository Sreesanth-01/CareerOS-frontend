import React, { useContext, useEffect, useState } from 'react'
import ApplicationCard from '../components/ApplicationCard'
import { useNavigate } from 'react-router-dom'
import { getJobApplications } from '../api/jobApi';
import AuthContext from '../context/AuthContext';
import ApplicationChart from '../components/ApplicationChart';
import StatusChart from '../components/StatusChart';
import {Lightbulb, BriefcaseBusiness, TrendingUp, MessagesSquare, CalendarCheck, Trophy , Clock, ChartNoAxesCombined, PieChart, ArrowUpRight} from 'lucide-react';
const Dashboard = () => {

    const navigate = useNavigate();

    const {userName} = useContext(AuthContext);

    const [jobList,setJobList] = useState([]);

    const interviews = jobList.filter((e)=>e.status==="INTERVIEW");
    const offers = jobList.filter((e)=>e.status==="OFFER_RECIEVED");
    const pending = jobList.filter((e)=>e.status==="ON_HOLD");

    const sortedListByDate = jobList.toSorted((a,b)=> new Date(b.appliedDate) - new Date(a.appliedDate)).slice(0,3); //toSorted() returns a new copy while sort() modifies og.

    const lineChartData = jobList.reduce((acc,app)=>{
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

    lineChartData.sort((a,b)=> new Date(a.date)-new Date(b.date));

    const statusCounts = jobList.reduce((acc,app)=>{
        acc[app.status] = (acc[app.status] || 0) +1;
        return acc;
    },{});

    const statusData = Object.entries(statusCounts).map(([status,count])=>(
        {
            name:status,
            value:count
        }
    ));

    const roleCounts = jobList.reduce((acc,app)=>{
        const role = app.jobRole?.trim();

        if(role){
            acc[role] = (acc[role]||0)+1;
        }
        return acc;
    },{});

    const topRoles = Object.entries(roleCounts).sort((a,b)=> b[1]-a[1]);


    const today = new Date();
    const beforeSevenDays = new Date(today);

    beforeSevenDays.setDate(today.getDate()-6); //6 because the current day is included.
    beforeSevenDays.setHours(0,0,0,0); //set time to midnight(start of the day)

    const weekCount = jobList.reduce((acc,app)=>{
        const date = new Date(app.appliedDate);

        if(!isNaN(date.getTime()) && date>=beforeSevenDays && date<=today){
            acc++;
        }
        return acc;
    },0);

    const respondedStatuses = [
        "INTERVIEW","OFFER_RECIEVED","REJECTED"
    ];// for calculating the response rate. Any of the above status implies a response recieved.

    const respondedCount = jobList.filter((app)=>
        respondedStatuses.includes(app.status)
    ).length;

    const responseRate = jobList.length ? Math.round((respondedCount/jobList.length)*100) : 0;
    

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
                <BriefcaseBusiness />
                <p className='text-2xl font-semibold mt-2'>{jobList.length}</p>
                <p className='text-sm text-gray-500'>Total Applications</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
                
                <CalendarCheck />
                <p className='text-2xl font-semibold mt-2'>{interviews.length}</p>
                <p className='text-sm text-gray-500'>Interviews</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
                <Trophy />
                <p className='text-2xl font-semibold mt-2'>{offers.length}</p>
                <p className='text-sm text-gray-500'>Offers</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
                <Clock />
                <p className='text-2xl font-semibold mt-2'>{pending.length}</p>
                <p className='text-sm text-gray-500'>Pending</p>
            </div>
           
        </div>

        {/* Applcation area */}
        <div className='flex gap-6'>
            {/* Chart section */}
            <div className='flex-1 bg-white p-6 rounded-lg shadow-sm h-auto'>
                
                <div className='flex items-center gap-3'>
                    <div className='bg-gray-100 p-3 rounded-lg'>
                        <ChartNoAxesCombined />
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>Application Activity</h2>
                        <p className='text-sm text-gray-500 mb-3'>Your applications over time</p>
                    </div>
                    
                </div>
                <ApplicationChart data={lineChartData}></ApplicationChart>
            </div>

            {/* Status section */}
            <div className='w-80 bg-white p-6 rounded-lg shadow-sm h-auto'>
                <div className='flex items-center gap-3'>
                     <div className='bg-gray-100 p-3 rounded-lg'>
                        <PieChart />
                    </div>
                    <div>
                        <h2 className='text-lg font-semibold'>Application Status</h2>
                        <p className='text-sm text-gray-500'>Status of your applications</p>
                    </div>

                </div>
                <StatusChart data={statusData}></StatusChart>
            </div>
        </div>

        {/* Recent applications */}
        <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center justify-between'>
                <div className='mb-5'>
                    <h2 className='text-lg font-semibold'>Recent Applications</h2>
                    <p className='text-sm text-gray-500'>Your last few applications</p>
                </div>
                <button onClick={()=>navigate("/ViewjobApplications")}className=' rounded-lg px-2 mb-5 hover:cursor-pointer hover:bg-gray-100 transition'><ArrowUpRight /></button>
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

        {/* Job search insights */}
        <div className='w-full bg-white p-6 rounded-lg shadow-sm '>
            <div className='flex items-center justify-between mb-6'>
                <div>
                    <h2 className='text-lg font-semibold'>Job Search Insights</h2>
                    <p className='text-sm text-gray-500 mt-1'>Your job search at a glance</p>
                </div>
                <div>
                    <Lightbulb className="text-amber-500" />
                </div>
            </div>

            <div className='space-y-5'>
                {/* Top Role */}
                <div className='flex items-center gap-3'>
                    <div className='bg-blue-50 p-3 rounded-lg'>
                        <BriefcaseBusiness  />
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Most applied-to role</p>
                        <p className='font-semibold'>{topRoles.length ? topRoles[0][0] : "No data yet" }</p>
                        {topRoles.length && (
                            <p className='text-xs text-gray-500'>{topRoles[0][1]} applications</p>
                        )}
                    </div>
                </div>

                <div className="border-t border-gray-100" />

                {/* Last 7 days applications */}
                <div className='flex items-center gap-3'>
                    <div className='bg-green-50 p-3 rounded-lg'>
                        <TrendingUp />
                    </div>
                  <div>
                      <p className='text-sm text-gray-500'>Last 7 days</p>
                      <p className='font-semibold'>{weekCount} applications submitted</p>
                      <p className='text-xs text-gray-500'>{weekCount > 0 ? "Keep building your momentum" : "Time to get started"}</p>
                  </div>
                </div>

                <div className="border-t border-gray-100" />

                {/* Respone Rate */}
                <div className='flex items-center gap-3'>
                    <div className='bg-orange-50 p-3 rounded-lg'>
                        <MessagesSquare />
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-between items-center'>
                            <p className='text-sm text-gray-500'>Response rate</p>
                            <p className='font-semibold'>{responseRate}%</p>
                        </div>

                        <div className='w-full bg-orange-100 h-2 rounded-full mt-2'>
                            <div className='bg-orange-500 h-2 rounded-full' style={{width:`${responseRate}%`}} />
                        </div>
                        <p className='text-xs text-gray-500 mt-1'>{respondedCount} of {jobList.length} applications</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
