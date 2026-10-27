import React from 'react'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const ApplicationChart = ({data}) => {
  if(data.length<=1){
    return (
      <div>
        <p className='text-center'>Chart not available. Add more applications to view chart</p>
      </div>
    )
  }
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}  margin={{ top: 10, right: 10, left: -40, bottom: 5 }}>
            
            <XAxis dataKey="date" tick={{fontSize:12, fill:"#6B7280"}} tickMargin={10} />
            <YAxis allowDecimals={false} tick={{fontSize:12,fill:"#6B7280"}} tickMargin={6} />
            <Tooltip />
            <Line  dataKey="count" stroke='#010611' strokeWidth={2} />
        </LineChart>

      </ResponsiveContainer>
    </div>
  )
}

export default ApplicationChart
