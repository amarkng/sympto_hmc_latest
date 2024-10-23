import React from 'react';
import { PiPersonArmsSpreadFill } from 'react-icons/pi';
import { BsFillClipboard2PulseFill } from 'react-icons/bs';

export default function UpperBoxDoctor() {
  return (
    <div className='flex flex-col gap-6 w-full'>
      <div
        className='text-white p-8 rounded-xl shadow-lg flex items-center'
        style={{
          backgroundImage: 'url("/assets/images/box1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <PiPersonArmsSpreadFill className='text-4xl md:text-5xl ml-4 shrink-0' />
        <div className='ml-6 '>
          <h3 className='text-lg md:text-xl font-semibold'>Pasien</h3>
          <p className='text-3xl md:text-4xl lg:text-5xl font-extrabold'>15</p>
          <p className='text-sm md:text-base font-light'>15 Pasien terdaftar</p>
        </div>
      </div>

      <div
        className=' text-white p-8 rounded-xl shadow-lg flex items-center'
        style={{
          backgroundImage: 'url("/assets/images/box1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <BsFillClipboard2PulseFill className='text-4xl md:text-5xl ml-4 transform scale-x-[-1] shrink-0' />
        <div className='ml-6 '>
          <h3 className='text-lg md:text-xl font-semibold'>
            Menunggu Verifikasi Diagnosis
          </h3>
          <p className='text-3xl md:text-4xl lg:text-5xl font-extrabold'>48</p>
          <p className='text-sm md:text-base font-light'>
            48 Data menunggu verifikasi
          </p>
        </div>
      </div>
    </div>
  );
}
