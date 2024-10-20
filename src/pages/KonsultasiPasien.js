import React from 'react';
import NavbarPatient from '../app/components/NavbarPatient';
import HistoryDiagnosis from '../app/components/HistoryDiagnosis';

export default function KonsultasiPasien() {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* Navbar Sidebar */}
      <NavbarPatient />

      {/* Main Content */}
      <div className='flex-1 p-6'>
        <h1 className='text-3xl font-bold mb-6 text-black'>Konsultasi</h1>

        {/* Box Container for History Diagnosis */}
        <div>
          <HistoryDiagnosis />
        </div>
      </div>
    </div>
  );
}
