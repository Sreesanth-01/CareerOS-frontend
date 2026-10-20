import { Building2, Calendar, IndianRupee, MapPin, Wallet, Workflow, X } from 'lucide-react'
import React from 'react'

const JobDetailsModal = ({application,onClose}) => {
  return (
    <div className='border rounded-md'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-3 p-2'>
                <Building2 size={30} nonScalingStroke/>
                <div>
                    <h2 className='text-xl font-semibold'>{application.companyName}</h2>
                    <h3 className='text-sm text-gray-500'>{application.jobRole}</h3>
                     <p className='inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700'>{application.status}</p>
                </div>
            </div>
            <div className='p-2' onClick={onClose}>
                <X size={15}/>
            </div>
        </div>

      <div className='p-2'>
        <h4 className='text-md font-medium'>Application Details:</h4>
        <div className='flex items-center justify-around mt-2'>
            <div>
                <p className='flex items-center gap-1 text-sm text-gray-500'><Wallet size={20}/> Salary</p>
                <p className='flex items-center text-md font-medium'><IndianRupee size={15} />{application.salary}</p>
            </div>
            <div>
                <p className='flex items-center gap-1 text-sm text-gray-500'><Calendar size={20} />Applied date</p>
                <p className='text-md font-medium'>{application.appliedDate}</p>
            </div>
        </div>
        <div className='flex items-center justify-around mt-4'>
            <div>
                <p className='flex items-center gap-1 text-sm text-gray-500'><MapPin size={20} />Location</p>
                <p className='text-md font-medium'>location</p>
            </div>
            <div>
                <p className='flex items-center gap-1 text-sm text-gray-500'><Workflow size={20} /> WorkMode</p>
                <p className='text-md font-medium'>workMode</p>
            </div>
        </div>

        <div className='mt-4'>
            <p className='text-md font-medium'>Notes:</p>
            <p className='p-2'>{application.notes}</p>
        </div>
      </div>
    </div>
  )
}

export default JobDetailsModal
