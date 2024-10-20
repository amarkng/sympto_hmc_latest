import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import dynamic from 'next/dynamic';

import UpperBoxDoctor from '@/app/components/UpperBoxDoctor';
import QueueMeetBox from '../app/components/QueueMeetBox';
import NavbarDoc from '../app/components/NavbarDoc';

const CircularChart = dynamic(() => import('../app/components/CircularChart'), {
  ssr: false,
});

export default function DoctorDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex min-h-screen'>
      <NavbarDoc toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 p-6 bg-gray-50 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>SymptoSense</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 space-y-6 '>
            <UpperBoxDoctor />
            <div className='bg-white p-1 rounded-lg shadow-lg'>
              <CircularChart />
            </div>
          </div>

          <div className='space-y-6 '>
            <QueueMeetBox />
          </div>
        </div>
      </div>
    </div>
  );
}
