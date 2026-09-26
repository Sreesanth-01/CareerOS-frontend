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
