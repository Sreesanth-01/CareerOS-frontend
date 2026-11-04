import React, { useState } from 'react'
import Input from './Input'
import { Check, CheckCheck, CheckCircleIcon, Filter, X } from 'lucide-react';

const FiltersModal = ({onClose,applyFilters}) => {

    const [filterBy,setFilterBy] = useState("none");
    const [sortBy,setSortBy] = useState("none");
    const [status,setStatus] = useState("SAVED");
    const [fromDate,setFromDate] = useState("");
    const [toDate,setToDate] = useState("");

    const handleClick = () =>{
        applyFilters({filterBy, sortBy, status, fromDate, toDate});
        onClose();
    }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
      <div className='relative w-full max-w-xl max-h-[85vh] overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl'>
        <div className='flex items-center justify-between p-2'>
            <div className='flex gap-2'>
                <Filter/>
                <h1 className='font-semibold'>Filter and Sort</h1>
            </div>
            <div className='cursor-pointer rounded-md p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900'>
                <X size={18} onClick={onClose}/>
            </div>
        </div>
        <div className='p-4'>
            <h2 className='font-semibold'>Filter By:</h2>
            <div className='flex gap-4'>
                <div>
                    <input name='filterBy' value="status" id='Status' type='radio' onChange={(e)=>setFilterBy(e.target.value)} checked={filterBy==="status"}/>
                    <label htmlFor='Status'>Status</label>
                </div>
                <div>
                    <input name='filterBy' value="date" id='Date' type='radio' onChange={(e)=>setFilterBy(e.target.value)} checked={filterBy==="date"} />
                    <label htmlFor='Date'>Date</label>
                </div>
                <div>
                    <input name='filterBy' value="none" id='None' type='radio' onChange={(e)=>setFilterBy(e.target.value)} checked={filterBy==="none"}/>
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
                <Input type='date' label="To" name="toDate" value={toDate} onChange={(e)=>setToDate(e.target.value)}></Input>
            </div>
        ) }

      </div>
      <div className='border-t text-gray-300 my-1'></div>
      <div className='p-4'>
        <h2 className='font-semibold'>Sort By:</h2>
        <div className='flex gap-4'>
            <div>
                <input name='sortBy' value="asc" id='Asc' type='radio' onChange={(e)=>setSortBy(e.target.value)} checked={sortBy==="asc"}/>
                <label htmlFor='Asc'>Ascending</label>
            </div>
            <div>
                <input name='sortBy' value="desc" id='Desc' type='radio' onChange={(e)=>setSortBy(e.target.value)} checked={sortBy==="desc"}/>
                <label htmlFor='Desc'>Descending</label>
            </div>
            <div>
                <input name='sortBy' value="none" id='None' type='radio' onChange={(e)=>setSortBy(e.target.value)} checked={sortBy==="none"}/>
                <label htmlFor='None'>None</label>
            </div>
        </div>

        
      </div>
      <div className='flex justify-end p-2'>
        <div className='cursor-pointer rounded-md p-2 text-green-500 transition hover:bg-green-100 hover:text-green-900'>
            <CheckCheck onClick={handleClick} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default FiltersModal
