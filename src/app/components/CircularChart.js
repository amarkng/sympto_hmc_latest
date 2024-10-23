import React, { useState, useEffect } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const data = [
  { name: 'Anak-anak', value: 10, color: '#00C49F' },
  { name: 'Remaja', value: 15, color: '#FFBB28' },
  { name: 'Dewasa', value: 20, color: '#FF8042' },
  { name: 'Lanjut Usia', value: 1, color: '#0088FE' },
];

const renderTotalLabel = ({ cx, cy }) => {
  const total = data.reduce((acc, cur) => acc + cur.value, 0);
  return (
    <>
      <text
        x={cx}
        y={cy - 10}
        textAnchor='middle'
        dominantBaseline='middle'
        className='text-lg font-bold'
        fill='#666'
        style={{ fontSize: '16px', fontWeight: '500' }}
      >
        Total Pasien
      </text>
      <text
        x={cx} // posisi X di tengah
        y={cy + 20} // posisi Y agar angka tampil di bawah teks
        textAnchor='middle'
        dominantBaseline='middle'
        className='text-lg font-bold'
        fill='#000'
        style={{ fontSize: '32px', fontWeight: 'bold' }}
      >
        {total}
      </text>
    </>
  );
};

export default function CircularChart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className='bg-white p-6 md:mt-2 rounded-lg flex flex-col justify-center items-center h-full'>
      <h2 className='text-xl font-bold text-gray-800 mb-6 text-center'>
        Overview Pasien
      </h2>

      <div style={{ width: '100%', maxWidth: '600px', height: 'auto' }}>
        <ResponsiveContainer width='100%' height={300}>
          <PieChart>
            <Pie
              data={data}
              cx='50%'
              cy='50%'
              innerRadius='60%'
              outerRadius='75%'
              fill='#8884d8'
              paddingAngle={1}
              dataKey='value'
              labelLine={false}
              label={renderTotalLabel} // total pasien di tengah chart
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout='horizontal'
              verticalAlign='bottom'
              align='center'
              iconType='circle'
              formatter={(value, entry) => (
                <span className='text-sm text-black font-semibold'>
                  {value}
                </span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
