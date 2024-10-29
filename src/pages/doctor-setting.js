import React, { useState } from 'react';
import NavbarDoc from '../app/components/NavbarDoc';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { LuPenLine } from 'react-icons/lu';
import { TbEdit } from 'react-icons/tb';

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
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePasswordModal = () => {
    setShowPasswordModal(true);
  };
  const [passwordInput, setPasswordInput] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const openPasswordModal = () => setShowPasswordModal(true);
  const closePasswordModal = () => setShowPasswordModal(false);
  const handlePasswordChange = (e) => {
    setPasswordInput({ ...passwordInput, [e.target.name]: e.target.value });
  };

  const handlePasswordSubmit = () => {
    if (
      passwordInput.oldPassword === '' ||
      passwordInput.newPassword === '' ||
      passwordInput.confirmPassword === ''
    ) {
      alert('Password tidak boleh kosong');
    } else if (passwordInput.oldPassword !== 'Dokter') {
      alert('Maaf password lama salah');
    } else if (passwordInput.newPassword !== passwordInput.confirmPassword) {
      alert('Password baru dan konfirmasi password tidak sama');
    } else {
      alert('Password Berhasil diubah');
      closePasswordModal();
    }
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
        } overflow-y-auto`}
        style={{ maxHeight: '100vh' }}
      >
        {/* Hamburger Mobile */}
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>Pengaturan</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='bg-white p-7 rounded-lg shadow-lg w-full max-w-6x2 min-h-[90vh] mx-auto'>
          <h1 className='text-3xl font-bold mb-6 text-black text-center md:text-left'>
            Pengaturan
          </h1>

          <div className='flex justify-center mb-6'>
            <div className='relative'>
              <Image
                src='/assets/images/logoDokter.png'
                alt='Doctor Profile'
                className='w-45 h-45 rounded-full'
                width={100}
                height={100}
              />

              {!isSidebarOpen && (
                <button
                  className='absolute bottom-0 right-0 bg-gray-100 text-black p-2 rounded-full'
                  style={{ outline: '4px solid white' }}
                  aria-label='Edit Profile Picture'
                >
                  <LuPenLine className='text-sm' />
                </button>
              )}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-4'>
            <div>
              <label className='block text-md mb-2 text-black'>Nama</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-lg text-black'
              />
            </div>

            <div>
              <label className='block text-md mb-2 text-black'>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-lg text-black'
              />
            </div>

            <div className='relative'>
              <label className='block text-sm font-medium text-black'>
                Ubah Password
              </label>
              <div className='relative'>
                <input
                  type='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className='w-full p-3 pr-10 border border-gray-300 rounded-lg text-black'
                />
                {!isSidebarOpen && (
                  <button
                    onClick={handlePasswordModal}
                    className='absolute inset-y-0 right-3 flex items-center'
                    aria-label='Edit Password'
                  >
                    <TbEdit className='text-xl' />
                  </button>
                )}
              </div>
            </div>

            <div>
              <label className='block text-md mb-2 text-black'>No. Telp</label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='w-full p-3 border border-gray-300 rounded-lg text-black'
              />
            </div>

            <div>
              <label className='block text-md mb-2 text-black'>
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
              <label className='block text-md mb-2 text-black'>
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
              <label className='block text-md mb-2 text-black'>Alamat</label>
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
              className='w-full max-w-[200px] px-4 py-3 bg-blue-600 font-semibold text-white rounded-lg text-center transition-all truncate'
            >
              Simpan
            </button>
            <button
              onClick={handleCancel}
              className='w-full max-w-[200px] px-4 py-3 border font-semibold border-gray-400 text-gray-400 hover:bg-gray-300 rounded-lg text-center transition-all truncate'
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
      {showPasswordModal && (
        <div className='fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50'>
          <div className='bg-white w-[100%] max-w-md  rounded-xl shadow-lg'>
            <div className='relative bg-article-blue p-4 rounded-t-xl flex justify-center items-center'>
              <h2 className='text-lg  text-white'>Ubah Password</h2>
              <button
                onClick={closePasswordModal}
                className='absolute right-4 top-4 w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xl hover:bg-blue-700'
              >
                &times;
              </button>
            </div>

            <div className='p-6 space-y-6'>
              <div className='mb-6'>
                <label className='block text-sm font-medium text-black'>
                  Password Lama
                </label>
                <input
                  type='password'
                  name='oldPassword'
                  value={passwordInput.oldPassword}
                  onChange={handlePasswordChange}
                  placeholder='Masukkan password lama'
                  className='w-full p-3 border border-gray-300 rounded-lg text-black'
                />
              </div>
              <div className='mb-6'>
                <label className='block text-sm font-medium text-black'>
                  Password Baru
                </label>
                <input
                  type='password'
                  name='newPassword'
                  value={passwordInput.newPassword}
                  onChange={handlePasswordChange}
                  placeholder='Masukkan password baru'
                  className='w-full p-3 border border-gray-300 rounded-lg text-black'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-black'>
                  Konfirmasi Password Baru
                </label>
                <input
                  type='password'
                  name='confirmPassword'
                  value={passwordInput.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder='Masukkan password baru'
                  className='w-full p-3 border border-gray-300 rounded-lg text-black'
                />
              </div>

              <button
                onClick={handlePasswordSubmit}
                className='w-32 py-2 bg-article-blue text-white font-semibold rounded-lg mx-auto block'
              >
                Ubah
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
