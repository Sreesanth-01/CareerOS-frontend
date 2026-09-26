import React from 'react'
import ApplicationCard from '../components/ApplicationCard'

const Dashboard = () => {
  return (
    <div className='min-h-screen bg-gray-50 px-6 py-10 max-w-6xl mx-auto space-y-8'>
        {/* Welcome text area */}
        <div className='mb-8'>
            <h3 className='text-2xl font-bold'>
                Hello! <span>userName</span>
            </h3>
            <p className='text-gray-500 mt-2'>Take a look at an overview of your job search</p>
        </div>

        {/* Summary cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
                <p className='text-sm text-gray-500'>Total Applications</p>
                <p className='text-2xl font-semibold mt-2'>24</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
                <p className='text-sm text-gray-500'>Interviews</p>
                <p className='text-2xl font-semibold mt-2'>8</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
                <p className='text-sm text-gray-500'>Offers</p>
                <p className='text-2xl font-semibold mt-2'>2</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
                <p className='text-sm text-gray-500'>Pending</p>
                <p className='text-2xl font-semibold mt-2'>11</p>
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
        <h2 className='text-lg font-semibold mb-5'>Recent Applications</h2>
            <div>
                <ApplicationCard company="Google" role="Software Engineer" status="Interview" date="Sep 20, 2026"></ApplicationCard>
                <div className='border-t border-gray-100 my-4'></div>
                <ApplicationCard company="Microsoft" role="SDE" status="Applied" date="Sep 18, 2026"></ApplicationCard>
                <div className='border-t border-gray-100 my-4'></div>
                <ApplicationCard company="Zoho" role="Backend Developer" status="Rejected" date="Sep 15, 2026"></ApplicationCard>
            </div>
        </div>

        {/* Upcoming */}
        <h2 className='text-lg font-semibold'>Upcoming list</h2>
        <div className='w-full bg-white p-6 rounded-lg shadow-sm '>
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
