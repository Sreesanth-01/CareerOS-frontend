import React, { useState } from 'react'
import Input from './Input'

const FiltersModal = () => {

    const [filterBy,setFilterBy] = useState(null);
    const [sortBy,setSortBy] = useState("desc");

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
      <div>
        <h2>Sort By:</h2>
        <div>
            <div>
                <input name='sortBy' value="asc" id='Asc' type='radio' onChange={(e)=>setSortBy(e.target.value)} />
                <label htmlFor='Asc'>Ascending</label>
            </div>
            <div>
                <input name='sortBy' value="desc" id='Desc' type='radio' onChange={(e)=>setSortBy(e.target.value)} />
                <label htmlFor='Desc'>Descending</label>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FiltersModal
