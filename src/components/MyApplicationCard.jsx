import React from 'react'
import { Building2, ChevronRight, MapPin } from 'lucide-react'

const MyApplicationCard = ({application}) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center'>
        <div className='bg-gray-50 p-3 rounded-lg'>
          <Building2 size={30} nonScalingStroke />
        </div>
        <div>
          <h2 className='text-lg font-semibold'>{application.companyName}</h2>
          <p className='text-sm text-gray-500'>{application.jobRole}</p>
        </div>
      </div>
      <div className='text-right'>
        <p className='inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700'>{application.status}</p>
      </div>
      <div>
        <p className='flex items-center text-gray-500'><MapPin size={15} className='text-gray-500' />location</p>
        <p className='text-sm'>{application.appliedDate}</p>
      </div>
      <div>
        <ChevronRight />
      </div>
    </div>
  )
}

export default MyApplicationCard
