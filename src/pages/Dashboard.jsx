import React from 'react'

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
        <div className='w-full bg-white p-6 rounded-lg shadow-sm h-36'>
            Recent Applications
        </div>

        {/* Upcoming */}
        <div className='w-full bg-white p-6 rounded-lg shadow-sm h-36'>
            Upcoming list
        </div>
    </div>
  )
}

export default Dashboard
