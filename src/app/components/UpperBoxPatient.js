import React from 'react';
import { FaUserMd, FaStethoscope, FaClipboardList } from 'react-icons/fa';

export default function UpperBoxPatient() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
      <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg flex items-center'>
        <FaUserMd className='text-5xl ml-4' />
        <div style={{ marginLeft: '34px' }}>
          <h3 className='text-xl font-semibold'>Total Konsultasi</h3>
          <p className='text-4xl font-extrabold'>1</p>
          <p className='text-base font-light'>1 Dokter</p>
        </div>
      </div>

      <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg flex items-center'>
        <FaStethoscope className='text-5xl ml-4' />
        <div style={{ marginLeft: '34px' }}>
          <h3 className='text-xl font-semibold'>Total Diagnosis</h3>
          <p className='text-4xl font-extrabold'>2</p>
          <p className='text-base font-light'>2 Jenis Penyakit</p>
        </div>
      </div>

      <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg flex items-center'>
        <FaClipboardList className='text-5xl ml-4' />
        <div style={{ marginLeft: '34px' }}>
          <h3 className='text-xl font-semibold'>Menunggu Verifikasi</h3>
          <p className='text-4xl font-extrabold'>3</p>
          <p className='text-base font-light'>3 menunggu verifikasi dokter</p>
        </div>
      </div>
    </div>
  );
}
