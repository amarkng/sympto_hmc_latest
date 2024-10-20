import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Anak-anak', value: 20, color: '#00C49F' },
  { name: 'Remaja', value: 30, color: '#FFBB28' },
  { name: 'Dewasa', value: 40, color: '#0088FE' },
  { name: 'Lanjut Usia', value: 10, color: '#FF8042' },
];

export default function CircularChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className='bg-white p-6 md:mt-2 rounded-lg  '
      style={{
        minHeight: '55vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h2
        className='text-xl font-bold text-gray-800 mb-5'
        style={{ marginTop: '-25px' }}
      >
        Overview Pasien
      </h2>
      <div
        className='chart-container'
        style={{ width: '100%', maxWidth: '700px', height: '350px' }}
      >
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius='60%' // ukuran lingkaran
              outerRadius='75%'
              startAngle={180}
              endAngle={-180} // semi-lingkaran
              paddingAngle={5}
              dataKey='value'
              cornerRadius={5} //ujung melengkung
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              layout='horizontal'
              verticalAlign='bottom'
              align='center'
              formatter={(value, entry) => (
                <span className='text-sm text-black font-semibold'>
                  {value} {entry.payload.value}%
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
