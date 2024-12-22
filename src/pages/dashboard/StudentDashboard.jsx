import React, { useEffect, useState } from 'react';
import { get } from '../../services';
import { apiPaths } from '../../constants';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const StudentDashboard = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await get(apiPaths.STUDENT.DASHBOARD.LEVEL_DISTRIBUTION)
    setData(response)
    console.log(response)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>
      <div className='glass-effect m-3 p-3'>
        <div>
          <h2 className='text-center'>Quiz Summary</h2>
        </div>
        <div style={{ height: "400px" }} >
          <ResponsiveContainer width="100%"  >
            <PieChart width={400} height={400} >
              <Pie

                data={data}
                dataKey="value"
                nameKey="level"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label={(entry) => `${entry.level} (${((entry.value / 9) * 100).toFixed(2)}%)`}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;