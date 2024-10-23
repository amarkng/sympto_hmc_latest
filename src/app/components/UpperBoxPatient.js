import React from 'react';
import { FaUserMd } from 'react-icons/fa';
import { BsFillClipboard2PulseFill } from 'react-icons/bs';
import { TbStethoscope } from 'react-icons/tb';

export default function UpperBoxPatient() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
      <div
        className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg flex items-center'
        style={{
          backgroundImage: 'url("/assets/images/box1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <FaUserMd className='text-5xl ml-4' />
        <div style={{ marginLeft: '34px' }}>
          <h3 className='text-xl font-semibold'>Total Konsultasi</h3>
          <p className='text-4xl font-extrabold'>1</p>
          <p className='text-base font-light'>1 Dokter</p>
        </div>
      </div>

      <div
        className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg flex items-center'
        style={{
          backgroundImage: 'url("/assets/images/box1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <TbStethoscope className='text-5xl ml-4' />
        <div style={{ marginLeft: '34px' }}>
          <h3 className='text-xl font-semibold'>Total Diagnosis</h3>
          <p className='text-4xl font-extrabold'>2</p>
          <p className='text-base font-light'>2 Jenis Penyakit</p>
        </div>
      </div>

      <div
        className='bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl shadow-lg flex items-center'
        style={{
          backgroundImage: 'url("/assets/images/box1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <BsFillClipboard2PulseFill className='text-5xl ml-4 transform scale-x-[-1]' />
        <div style={{ marginLeft: '34px' }}>
          <h3 className='text-xl font-semibold'>Menunggu Verifikasi</h3>
          <p className='text-4xl font-extrabold'>3</p>
          <p className='text-base font-light'>3 menunggu verifikasi dokter</p>
        </div>
      </div>
    </div>
  );
}
