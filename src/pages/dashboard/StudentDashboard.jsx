import React, { useEffect, useState } from 'react';
import { get } from '../../services';
import { apiPaths } from '../../constants';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { NoDataFound } from '../../components/reusable';
import {Loader} from "../../components/index.js"

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const StudentDashboard = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const response = await get(apiPaths.STUDENT.DASHBOARD.LEVEL_DISTRIBUTION)
    console.log(response)
    setData(response)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='glass-effect m-3 p-3'>
        {!isLoading && !data.length ?
          <NoDataFound  description={"Looks like you haven't started yet. Take a quiz to see your progress here!"} />
          :
          <>
            <div>
              <h2 className='text-center'>Quiz Summary</h2>
            </div>
            <div style={{ height: "400px" }} >
              {isLoading ? <Loader /> :  <ResponsiveContainer width="100%"  >
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
              </ResponsiveContainer>}
             
            </div>
          </>}
      </div>
    </>
  );
};

export default StudentDashboard;