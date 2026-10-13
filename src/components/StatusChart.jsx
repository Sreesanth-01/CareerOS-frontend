import React from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const StatusChart = ({data}) => {
    const COLORS = [
  "#002859",
  "#520540",
  "#01633fe0",
  "#600101",
  "#17015c"
];
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={85} innerRadius={55} paddingAngle={3}>
                {data.map((entry,index)=>(
                    <Cell key={`${index}`} fill={COLORS[index%COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />

        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default StatusChart
