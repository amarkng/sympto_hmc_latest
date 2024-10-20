import React, { useState } from 'react';
import NavbarDoc from '../app/components/NavbarDoc';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';

export default function DoctorSettings() {
  const [formData, setFormData] = useState({
    name: 'Arman Maul',
    email: 'Armanmaul@gmail.com',
    password: '************',
    phone: '+62 8211234565',
    gender: 'Laki-Laki',
    birthDate: '23/06/2002',
    address: 'Jl. Bojongsoang No.21',
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Pengaturan disimpan', formData);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleCancel = () => {
    console.log('Perubahan dibatalkan');
  };

  return (
    <div className='flex min-h-screen'>
      <NavbarDoc toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 p-6 bg-gray-50 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {/* Hamburger Mobile */}
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>Pengaturan</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='bg-white p-7 rounded-lg shadow-lg w-full max-w-6x2 min-h-[90vh] mx-auto'>
          <h1 className='text-3xl font-bold mb-6 text-black md:text-left ml-14 sm:text-center'>
            Pengaturan
          </h1>

          <div className='flex justify-center mb-6'>
            <div className='relative'>
              <Image
                src='/assets/images/placeholder2.png'
                alt='Doctor Profile'
                className='w-20 h-20 rounded-full mr-4'
                width={80}
                height={80}
              />
              <button className=' text-blue-600'>Ubah Foto</button>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 ml-14 mr-14'>
            <div>
              <label className='block text-sm font-medium text-black'>
                Nama
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-lg text-black'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-black'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-lg text-black'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-black'>
                Password
              </label>
              <input
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-lg text-black'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-black'>
                No. Telp
              </label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-lg text-black'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-black'>
                Jenis Kelamin
              </label>
              <select
                name='gender'
                value={formData.gender}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-lg text-black'
              >
                <option value='Laki-Laki'>Laki-Laki</option>
                <option value='Perempuan'>Perempuan</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-black'>
                Tanggal Lahir
              </label>
              <input
                type='date'
                name='birthDate'
                value={formData.birthDate}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-lg text-black'
              />
            </div>

            <div className='md:col-span-2'>
              <label className='block text-sm font-medium text-black'>
                Alamat
              </label>
              <input
                type='text'
                name='address'
                value={formData.address}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-lg text-black'
              />
            </div>
          </div>

          <div className='flex flex-col items-center justify-center mt-6 space-y-4 md:flex-row md:space-y-0 md:space-x-4'>
            <button
              onClick={handleSave}
              className='px-11 py-3 bg-blue-500 font-semibold hover:bg-blue-600 text-white rounded-lg '
            >
              Simpan
            </button>
            <button
              onClick={handleCancel}
              className='px-10 py-3 border font-semibold border-gray-400 text-gray-500 hover:bg-gray-300 rounded-lg'
            >
              Batalkan
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
            <h2 className='text-2xl font-semibold mb-4 text-black'>
              Data Berhasil Disimpan
            </h2>
            <p className='mb-6 text-black'>
              Data Anda berhasil disimpan ke dalam sistem.
            </p>
            <button
              onClick={closeModal}
              className='px-6 py-3 bg-blue-500 text-white rounded-lg'
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
