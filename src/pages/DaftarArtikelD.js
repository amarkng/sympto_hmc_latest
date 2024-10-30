import React, { useState } from 'react';
import NavbarDoc from '../app/components/NavbarDoc';
import { FaBars, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { TbEdit } from 'react-icons/tb';
import { FiTrash2 } from 'react-icons/fi';

const dummyData = [
  {
    id: 1,
    judul: 'The Golden Sands of Florida',
    kategori: 'Health',
    tanggal: '12/12/2022',
    gambar: 'photo.jpg',
    detail: 'Lorem Ipsum dolor sit...',
    status: 'Publish',
  },
  {
    id: 2,
    judul: 'The Golden Sands of Florida',
    kategori: 'Health',
    tanggal: '12/12/2022',
    gambar: 'photo.jpg',
    detail: 'Lorem Ipsum dolor sit...',
    status: 'Draft',
  },
  {
    id: 3,
    judul: 'The Golden Sands of Florida',
    kategori: 'Health',
    tanggal: '12/12/2022',
    gambar: 'photo.jpg',
    detail: 'Lorem Ipsum dolor sit...',
    status: 'Publish',
  },
  {
    id: 4,
    judul: 'The Golden Sands of Florida',
    kategori: 'Health',
    tanggal: '12/12/2022',
    gambar: 'photo.jpg',
    detail: 'Lorem Ipsum dolor sit...',
    status: 'Draft',
  },
  {
    id: 5,
    judul: 'The Golden Sands of Florida',
    kategori: 'Health',
    tanggal: '12/12/2022',
    gambar: 'photo.jpg',
    detail: 'Lorem Ipsum dolor sit...',
    status: 'Publish',
  },
  {
    id: 6,
    judul: 'The Golden Sands of Florida',
    kategori: 'Health',
    tanggal: '12/12/2022',
    gambar: 'photo.jpg',
    detail: 'Lorem Ipsum dolor sit...',
    status: 'Publish',
  },
  {
    id: 7,
    judul: 'The Golden Sands of Florida',
    kategori: 'Health',
    tanggal: '12/12/2022',
    gambar: 'photo.jpg',
    detail: 'Lorem Ipsum dolor sit...',
    status: 'Draft',
  },
  {
    id: 8,
    judul: 'The Golden Sands of Florida',
    kategori: 'Health',
    tanggal: '12/12/2022',
    gambar: 'photo.jpg',
    detail: 'Lorem Ipsum dolor sit...',
    status: 'Draft',
  },
  {
    id: 9,
    judul: 'The Golden Sands of Florida',
    kategori: 'Health',
    tanggal: '12/12/2022',
    gambar: 'photo.jpg',
    detail: 'Lorem Ipsum dolor sit...',
    status: 'Publish',
  },
];

export default function DaftarArtikelD() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [data, setData] = useState(dummyData);
  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handleEditClick = (item) => {
    window.location.href = '/EditArtikelD';
  };

  const handleDelete = (id) => {
    setData((prevData) => {
      const updatedData = prevData.filter((item) => item.id !== id);
      if (
        (currentPage - 1) * itemsPerPage >= updatedData.length &&
        currentPage > 1
      ) {
        setCurrentPage(currentPage - 1);
      }

      return updatedData;
    });
    alert('Artikel berhasil dihapus!');
    closeModal();
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
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>Symptosense</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <h1 className='hidden sm:block text-3xl font-bold text-black'>
            Unggah Artikel
          </h1>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-semibold text-black'>Daftar Artikel</h2>
            {!isSidebarOpen && (
              <button
                className={`bg-blue-600 text-white lg:py-2 lg:px-6 py-1 px-1 text-sm rounded-lg hover:bg-blue-700`}
                onClick={() => (window.location.href = '/UnggahArtikelD')}
              >
                + Buat Artikel Baru
              </button>
            )}
          </div>

          <div className='overflow-x-auto'>
            <table className='min-w-full table-auto border-collapse'>
              <thead className='bg-gray-100'>
                <tr>
                  <th className='px-4 py-4 text-sm font-semibold text-gray-table text-center'>
                    No.
                  </th>
                  <th className='px-4 py-4 text-sm font-semibold text-gray-table text-left'>
                    Judul
                  </th>
                  <th className='px-4 py-4 text-sm font-semibold text-gray-table text-center'>
                    Kategori
                  </th>
                  <th className='px-4 py-4 text-sm font-semibold text-gray-table text-center'>
                    Tanggal
                  </th>
                  <th className='px-4 py-4 text-sm font-semibold text-gray-table text-center'>
                    Gambar
                  </th>
                  <th className='px-4 py-4 text-sm font-semibold text-gray-table text-left'>
                    Detail Artikel
                  </th>
                  <th className='px-4 py-4 text-sm font-semibold text-gray-table text-center'>
                    Status
                  </th>
                  <th className='px-4 py-4 text-sm font-semibold text-gray-table text-center'>
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={item.id} className='border-b'>
                    <td className='px-4 py-6 text-center text-gray-table '>
                      {index + 1 + (currentPage - 1) * itemsPerPage}
                    </td>
                    <td className='px-4 py-6 text-left text-black'>
                      {item.judul}
                    </td>
                    <td className='px-4 py-6 text-center'>
                      <span className='bg-blue-600 text-white px-4 py-1 text-sm rounded-lg'>
                        {item.kategori}
                      </span>
                    </td>
                    <td className='px-4 py-6 text-center text-sm text-gray-table'>
                      {item.tanggal}
                    </td>
                    <td className='px-4 py-6 text-center text-sm text-gray-table'>
                      {item.gambar}
                    </td>
                    <td className='px-4 py-6 text-left text-sm text-gray-table'>
                      {item.detail}
                    </td>
                    <td className='px-4 py-6 text-center'>
                      <span
                        className={`px-4 py-1 rounded-lg ${
                          item.status === 'Publish'
                            ? 'bg-blue-600 text-sm text-white'
                            : 'bg-white text-sm border text-black'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className='px-4 py-6 text-center text-lg flex  items-center justify-center space-x-4'>
                      <button
                        onClick={() => handleEditClick(item)}
                        className='text-yellow-500 hover:text-yellow-600'
                      >
                        <TbEdit />
                      </button>
                      <button
                        onClick={() => openModal(item)}
                        className='text-red-600 hover:text-red-800'
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {isModalOpen && (
            <div className='fixed inset-0 flex justify-center items-center z-50'>
              <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center'>
                <h2 className='text-xl font-semibold mb-4 text-black'>
                  Hapus Artikel
                </h2>
                <p className='text-gray-700 mb-6 text-center'>
                  Apakah anda yakin akan menghapus artikel ini?
                </p>
                <div className='flex flex-col gap-4'>
                  <button className='bg-gray-300 text-gray-700 px-6 py-3 rounded-full  hover:bg-gray-400 transition duration-200'>
                    No
                  </button>
                  <button
                    onClick={() => handleDelete(selectedItem.id)}
                    className='bg-merah-yes text-white px-6 py-3 rounded-full  hover:bg-red-700 transition duration-200'
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className='flex justify-between items-center mt-4'>
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`py-1 px-3 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-200 flex items-center sm:text-sm text-xs sm:py-2 sm:px-4 ${
                currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
              }`}
            >
              <FaChevronLeft className='mr-2' /> Previous
            </button>

            <ul className='flex space-x-1 sm:space-x-2 overflow-x-auto'>
              {[...Array(totalPages)].map((_, index) => {
                if (
                  index + 1 === currentPage ||
                  (index + 1 >= currentPage - 1 && index + 1 <= currentPage + 1)
                ) {
                  return (
                    <li key={index}>
                      <button
                        onClick={() => setCurrentPage(index + 1)}
                        className={`py-1 px-2 sm:px-3 rounded-md border text-xs sm:text-sm ${
                          currentPage === index + 1
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-700'
                        } hover:bg-blue-500 hover:text-white transition`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  );
                }
                if (
                  index + 1 === currentPage - 2 ||
                  index + 1 === currentPage + 2
                ) {
                  return (
                    <li key={index} className='text-xs sm:text-sm'>
                      ...
                    </li>
                  );
                }
                return null;
              })}
            </ul>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className={`py-1 px-3 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-200 flex items-center sm:text-sm text-xs sm:py-2 sm:px-4 ${
                currentPage === totalPages
                  ? 'cursor-not-allowed opacity-50'
                  : ''
              }`}
            >
              Next <FaChevronRight className='ml-2' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
