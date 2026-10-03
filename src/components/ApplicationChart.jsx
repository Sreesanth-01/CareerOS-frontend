import React from 'react'
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";

const ApplicationChart = ({data}) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
            
            <XAxis dataKey="date" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Line  dataKey="count" stroke='#2563eb' strokeWidth={2} />
        </LineChart>

      </ResponsiveContainer>
    </div>
  )
}

export default ApplicationChart
