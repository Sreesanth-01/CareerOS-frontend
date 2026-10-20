import React from 'react'
import {Building2} from 'lucide-react';

const ApplicationCard = ({application}) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <div className='bg-gray-100 p-3 rounded-lg'>
          <Building2 />
        </div>
        <div>
          <h4 className='text-lg font-semibold'>{application.companyName}</h4>
          <p className='text-sm '>{application.jobRole}</p>
          <p className='text-sm text-gray-500'>{application.appliedDate}</p>
        </div>
      </div>

      <div className='text-right'>
        <p className='inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700'>{application.status}</p>
      </div>
    </div>
  )
}

export default ApplicationCard
