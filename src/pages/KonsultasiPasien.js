import React, { useState } from 'react';
import NavbarPatient from '../app/components/NavbarPatient';
import HistoryDiagnosis from '../app/components/HistoryDiagnosis';
import { FaBars } from 'react-icons/fa';

export default function KonsultasiPasien() {
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
        } overflow-y-auto`}
        style={{ maxHeight: '100vh' }}
      >
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>Konsultasi</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='hidden sm:block'>
          <h1 className='text-3xl font-bold mb-6 text-black'>Konsultasi</h1>
        </div>

        <div>
          <HistoryDiagnosis />
        </div>
      </div>
    </div>
  );
}
