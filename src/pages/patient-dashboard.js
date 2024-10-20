import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import NavbarPatient from '../app/components/NavbarPatient';
import UpperBoxPatient from '../app/components/UpperBoxPatient';
import HistoryDiagnosis from '../app/components/HistoryDiagnosis';

export default function PatientDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex min-h-screen'>
      <NavbarPatient
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

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

        <UpperBoxPatient />

        <div className='grid grid-cols-1 gap-6'>
          <HistoryDiagnosis />
        </div>
      </div>
    </div>
  );
}
