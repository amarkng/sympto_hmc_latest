import React from 'react';
import { FaUser, FaClipboardCheck } from 'react-icons/fa';
import { PiPersonArmsSpreadFill } from 'react-icons/pi';
import { BsFillClipboard2PulseFill } from 'react-icons/bs';

export default function UpperBoxDoctor() {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg flex items-center'>
        <PiPersonArmsSpreadFill className='text-5xl ml-4' />
        <div style={{ marginLeft: '34px' }}>
          <h3 className='text-xl font-semibold'>Pasien</h3>
          <p className='text-4xl font-extrabold'>15</p>
          <p className='text-base font-light'>15 Pasien terdaftar</p>
        </div>
      </div>

      <div className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg flex items-center'>
        <BsFillClipboard2PulseFill className='text-5xl ml-4 transform scale-x-[-1]' />
        <div style={{ marginLeft: '34px' }}>
          <h3 className='text-xl font-semibold'>
            Menunggu Verifikasi Diagnosis
          </h3>
          <p className='text-4xl font-extrabold'>48</p>
          <p className='text-base font-light'>48 Data menunggu verifikasi</p>
        </div>
      </div>
    </div>
  );
}
