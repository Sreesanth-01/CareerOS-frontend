import React from 'react'

const ApplicationCard = ({company,role,status,date}) => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <h3 className='font-semibold'>{company}</h3>
        <p className='text-sm text-gray-500'>{role}</p>
      </div>

      <div className='text-right'>
        <p className='text-sm font-medium'>{status}</p>
        <p className='text-sm text-gray=500'>{date}</p>
      </div>
    </div>
  )
}

export default ApplicationCard
