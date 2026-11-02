import React, { useState } from 'react'
import Input from './Input'

const FiltersModal = () => {

    const [filterBy,setFilterBy] = useState(null);

  return (
    <div>
      <div>
        <h2>Filter By:</h2>
        <div>
            <div>
                <input name='filterBy' value="status" id='Status' type='radio' onChange={(e)=>setFilterBy(e.target.value)} />
                <label htmlFor='Status'>Status</label>
            </div>
            <div>
                <input name='filterBy' value="date" id='Date' type='radio' onChange={(e)=>setFilterBy(e.target.value)} />
                <label htmlFor='Date'>Date</label>
            </div>

        </div>
        <p>{filterBy}</p>
      </div>
    </div>
  )
}

export default FiltersModal
