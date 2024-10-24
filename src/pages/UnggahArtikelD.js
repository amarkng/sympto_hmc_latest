import React, { useState } from 'react';
import NavbarDoc from '../app/components/NavbarDoc';
import { FaBars } from 'react-icons/fa';

export default function UnggahArtikelD() {
  const [judul, setJudul] = useState('The Golden Sands of Florida');
  const [kategori, setKategori] = useState('Health');
  const [tanggalRilis, setTanggalRilis] = useState('2002-06-23');
  const [detailArtikel, setDetailArtikel] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUnggah = () => {
    closeModal();
  };

  return (
    <div className='flex min-h-screen'>
      <NavbarDoc toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 p-6 bg-gray-50 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } overflow-y-auto`}
      >
        {/* Mobile Header */}
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>Daftar Artikel</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='flex-1 p-6'>
          <h1 className='text-3xl font-bold text-black mb-6'>Unggah Artikel</h1>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <form className='space-y-6'>
              <div>
                <label className='block text-sm font-medium text-black mb-2'>
                  Judul Artikel
                </label>
                <input
                  type='text'
                  className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder='Masukkan judul artikel'
                />
              </div>

              <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                <div>
                  <label className='block text-sm font-medium text-black mb-2'>
                    Kategori
                  </label>
                  <input
                    type='text'
                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                    placeholder='Masukkan kategori'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-black mb-2'>
                    Tanggal Rilis
                  </label>
                  <input
                    type='date'
                    className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
                    value={tanggalRilis}
                    onChange={(e) => setTanggalRilis(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-black mb-2'>
                  Upload Gambar
                </label>
                <div className='flex flex-col sm:flex-row items-center sm:items-start sm:space-x-1 w-full'>
                  <input
                    type='file'
                    className='file:mr-0 file:py-2 file:px-4 file:w-full sm:file:w-48 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-black hover:file:bg-gray-200'
                  />
                  <span className='text-sm text-gray-500 mt-2 sm:mt-0 w-full sm:w-auto text-center sm:text-left'>
                    Tidak ada file yang dipilih.
                  </span>
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium text-black mb-2'>
                  Detail Artikel
                </label>
                <textarea
                  className='w-full p-3 border resize-none  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
                  rows='6'
                  value={detailArtikel}
                  onChange={(e) => setDetailArtikel(e.target.value)}
                  placeholder='Masukkan detail artikel'
                />
              </div>

              <div className='flex flex-col md:flex-row justify-center gap-4'>
                <button
                  type='button'
                  onClick={openModal}
                  className='bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-200'
                >
                  Unggah
                </button>
                <button
                  type='button'
                  className='border border-gray-400 text-gray-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-200'
                >
                  Draf
                </button>
              </div>
            </form>
          </div>
        </div>

        {isModalOpen && (
          <div className='fixed inset-0 flex justify-center items-center'>
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-xs w-full text-center'>
              <h2 className='text-xl font-semibold mb-4 text-black'>
                Unggah Artikel
              </h2>
              <p className=' mb-6 text-black'>
                Apakah anda yakin ingin mengunggah artikel?
              </p>
              <div className='flex flex-col gap-4'>
                <button
                  onClick={handleUnggah}
                  className='bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-200'
                >
                  Yes
                </button>
                <button
                  onClick={closeModal}
                  className='bg-gray-300 text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-400 transition duration-200'
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
