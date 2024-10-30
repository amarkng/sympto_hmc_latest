import React, { useState } from 'react';
import NavbarDoc from '../app/components/NavbarDoc';
import { FaBars } from 'react-icons/fa';

export default function UnggahArtikelD() {
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('');
  const [detailArtikel, setDetailArtikel] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [tanggalRilis, setTanggalRilis] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleUnggah = () => {
    if (!judul) {
      alert('Harap isi judul artikel sebelum mengunggah.');
      closeModal();
    } else if (!kategori) {
      alert('Harap isi kategori artikel sebelum mengunggah.');
      closeModal();
    } else if (!detailArtikel) {
      alert('Harap isi detail artikel sebelum mengunggah.');
      closeModal();
    } else {
      alert('Artikel berhasil diunggah!');
      closeModal();
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className='flex min-h-screen'>
      <NavbarDoc toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 p-6 bg-gray-50 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } overflow-y-auto`}
      >
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>Symptosense</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='flex-1 '>
          <h1 className='text-3xl font-bold text-black mb-6 text-center lg:text-left'>
            Unggah Artikel
          </h1>

          <div className='bg-white p-6 rounded-lg shadow-md'>
            <form className='space-y-6'>
              <div>
                <label className='block text-md font-medium text-black mb-2'>
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
                  <label className='block text-md font-medium text-black mb-2'>
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
                  <label className='block text-md font-medium text-black mb-2'>
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
                <label className='block text-md font-medium text-black mb-2'>
                  Upload Gambar
                </label>
                <div className='flex flex-col items-start w-full'>
                  <input
                    type='file'
                    onChange={handleFileChange}
                    className='file:py-2 file:px-4 w-full sm:w-auto file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-black hover:file:bg-gray-200'
                  />
                  {!selectedFile && (
                    <span className='text-sm text-black mt-2 text-left'>
                      Tidak ada file yang dipilih.
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className='block text-md font-medium text-black mb-2'>
                  Detail Artikel
                </label>
                <textarea
                  className='w-full p-3 border resize-none  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
                  rows='6'
                  value={detailArtikel}
                  onChange={(e) => setDetailArtikel(e.target.value)}
                  placeholder='Tulis isi artikel'
                />
              </div>

              <div className='flex flex-col md:flex-row justify-center gap-4'>
                <button
                  type='button'
                  onClick={openModal}
                  className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200'
                >
                  Unggah
                </button>
                <button
                  type='button'
                  onClick={() => (window.location.href = '/DaftarArtikelD')}
                  className='border border-gray-400 text-gray-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200'
                >
                  Draf
                </button>
              </div>
            </form>
          </div>
        </div>

        {isModalOpen && (
          <div className='fixed inset-0 flex justify-center items-center'>
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center'>
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
