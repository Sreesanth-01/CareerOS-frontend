import React, { useState } from 'react'
import Input from './Input'

const FiltersModal = () => {

    const [filterBy,setFilterBy] = useState(null);
    const [sortBy,setSortBy] = useState("desc");
    const [status,setStatus] = useState("");
    const [fromDate,setFromDate] = useState(null);
    const [toDate,setToDate] = useState(null);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
      <div className='relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl'>
        <div className='p-4'>
            <h2 className='font-semibold'>Filter By:</h2>
            <div className='flex gap-4'>
                <div>
                    <input name='filterBy' value="status" id='Status' type='radio' onChange={(e)=>setFilterBy(e.target.value)}/>
                    <label htmlFor='Status'>Status</label>
                </div>
                <div>
                    <input name='filterBy' value="date" id='Date' type='radio' onChange={(e)=>setFilterBy(e.target.value)} />
                    <label htmlFor='Date'>Date</label>
                </div>
                <div>
                    <input name='filterBy' value={null} id='None' type='radio' onChange={(e)=>setFilterBy(e.target.value)} defaultChecked/>
                    <label htmlFor='None'>None</label>
                </div>
            </div>
        {filterBy==="status" && (
            <div className='flex flex-col gap-1'>
            <label htmlFor='status' className='font-semibold'>Status</label>
            <select name="status" value={status} onChange={(e)=>setStatus(e.target.value)} className='border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-black-500 focus-border-black-500'>
              <option value="SAVED">Saved</option>
              <option value="APPLIED">Applied</option>
              <option value="ASSESSMENT">Assessment</option>
              <option value="INTERVIEW">Interview</option>
              <option value="OFFER_RECIEVED">Offer Recieved</option>
              <option value="ACCEPTED">Accepted</option>
              <option value="REJECTED">Rejected</option>
              <option value="WITHDRAWN">Withdrawn</option>
              <option value="ON_HOLD">On Hold</option>
          </select>
        </div>
            )} 
        {filterBy==="date" && (
            <div>
                <Input type='date' label="From" name="fromDate" value={fromDate} onChange={(e)=>setFromDate(e.target.value)}></Input>
                <Input type='date' label="To" name="ToDate" value={toDate} onChange={(e)=>setToDate(e.target.value)}></Input>
            </div>
        ) }

      </div>
      <div className='p-4'>
        <h2 className='font-semibold'>Sort By:</h2>
        <div className='flex gap-4'>
            <div>
                <input name='sortBy' value="asc" id='Asc' type='radio' onChange={(e)=>setSortBy(e.target.value)} />
                <label htmlFor='Asc'>Ascending</label>
            </div>
            <div>
                <input name='sortBy' value="desc" id='Desc' type='radio' onChange={(e)=>setSortBy(e.target.value)} defaultChecked />
                <label htmlFor='Desc'>Descending</label>
            </div>
        </div>

        
      </div>
      <div className='flex justify-end gap-3 mb-4 p-4'>
        <button className='border rounded-lg p-1'>Apply Filters</button>
      </div>
      </div>
    </div>
  )
}

export default FiltersModal
