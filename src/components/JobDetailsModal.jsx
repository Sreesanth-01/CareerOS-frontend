import { Building2 } from 'lucide-react'
import React from 'react'

const JobDetailsModal = ({application,onClose}) => {
  return (
    <div className='border rounded-md'>
      <div className='flex items-center'>
        <Building2 />
        <div>
            <h2>{application.companyName}</h2>
            <h3>{application.jobRole}</h3>
            <p>{application.status}</p>
        </div>
      </div>

      <div>
        <h4>Application Details:</h4>
        <div className='flex items-center justify-around'>
            <div>
                <p>Salary:</p>
                <p>{application.salary}</p>
            </div>
            <div>
                <p>Applied date:</p>
                <p>{application.appliedDate}</p>
            </div>
        </div>
        <div className='flex items-center justify-around'>
            <div>
                <p>Location:</p>
                <p>location</p>
            </div>
            <div>
                <p>WorkMode:</p>
                <p>workMode</p>
            </div>
        </div>

        <div>
            <p>Notes:</p>
            <p>{application.notes}</p>
        </div>
      </div>
      <button onClick={()=>onClose(application)}>Close</button>
    </div>
  )
}

export default JobDetailsModal
