import { Building2, Calendar, Edit, IndianRupee, MapPin, Trash, Wallet, Workflow, X } from 'lucide-react'
import React from 'react'

const JobDetailsModal = ({application,onClose,onEdit,onDelete}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
        <div className='relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl'>
            <div className='flex items-start justify-between p-5'>
                <div className='flex items-center gap-3'>
                    <Building2 size={30} className='shrink-0 text-gray-700' />
                    <div>
                        <h2 className='text-xl font-semibold text-gray-900'>{application.companyName}</h2>
                        <h3 className='mt-1 text-sm text-gray-500'>{application.jobRole}</h3>
                        <p className='mt-2 inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700'>
                            {application.status}
                        </p>
                    </div>
                </div>
                <div className='cursor-pointer rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900' onClick={onClose}>
                    <X size={18} />
                </div>
            </div>

            <div className='space-y-6 px-6 pb-6'>
                <h4 className='text-base font-semibold text-gray-900'>Application Details:</h4>

                <div className='mt-2 grid grid-cols-2 gap-6'>
                    <div>
                        <p className='flex items-center gap-2 text-sm text-gray-500'><Wallet size={18} /> Salary</p>
                        <p className='mt-2 flex items-center text-base font-medium text-gray-900'><IndianRupee size={15} />{application.salary}</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-2 text-sm text-gray-500'><Calendar size={18} /> Applied date</p>
                        <p className='mt-2 text-base font-medium text-gray-900'>{application.appliedDate}</p>
                    </div>
                </div>

                <div className='mt-4 grid grid-cols-2 gap-6'>
                    <div>
                        <p className='flex items-center gap-2 text-sm text-gray-500'><MapPin size={18} /> Location</p>
                        <p className='mt-2 text-base font-medium text-gray-900'>{application.location || "Not specified"}</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-2 text-sm text-gray-500'><Workflow size={18} /> WorkMode</p>
                        <p className='mt-2 text-base font-medium text-gray-900'>{application.workMode}</p>
                    </div>
                </div>

                <div className='mt-4'>
                    <p className='mb-2 text-base font-semibold text-gray-900'>Notes:</p>
                    <p className='rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm leading-6 text-gray-600'>
                        {application.notes}
                    </p>
                </div>
            </div>
            <div className='flex justify-end gap-3 mb-4 p-4'>
                <Edit className="cursor-pointer  rounded-md  text-blue-500 transition hover:bg-gray-100 hover:text-blue-900" onClick={()=>onEdit(application.id)}></Edit>
                <Trash className="cursor-pointer  rounded-md  text-red-500 transition hover:bg-gray-100 hover:text-red-900" onClick={()=>{onDelete(application.id)}}></Trash>
            </div>
        </div>
    </div>
  )
}

export default JobDetailsModal
