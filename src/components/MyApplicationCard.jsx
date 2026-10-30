import React from 'react'
import { Building2, ChevronRight, MapPin } from 'lucide-react'

const MyApplicationCard = ({application}) => {
  return (
    <div className='grid w-full grid-cols-[1.2fr_1.2fr_1.2fr_30px] items-center gap-4'>
      <div className='flex items-center min-w-0'>
        <div className='bg-gray-50 p-3 rounded-lg'>
          <Building2 size={30} nonScalingStroke />
        </div>
        <div className='min-w-0'>
          <h2 className='text-lg font-semibold truncate'>{application.companyName}</h2>
          <p className='text-sm text-gray-500 truncate'>{application.jobRole}</p>
        </div>
      </div>
      <div className=''>
        <p className='inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700'>{application.status}</p>
      </div>
      <div>
        <p className='flex items-center text-gray-500'><MapPin size={15} className='text-gray-500' />{application.location || "Not specified"}</p>
        <p className='text-sm'>{application.appliedDate}</p>
      </div>
      <div>
        <ChevronRight />
      </div>
    </div>
  )
}

export default MyApplicationCard
