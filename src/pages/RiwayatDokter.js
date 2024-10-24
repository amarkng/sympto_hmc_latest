import React, { useState } from 'react';
import NavbarDoc from '../app/components/NavbarDoc';
import { FaChevronLeft, FaChevronRight, FaBars } from 'react-icons/fa';

const dummyData = [
  {
    id: 1,
    nama: 'Olivia Rhye',
    idDiagnosis: '22',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
  {
    id: 2,
    nama: 'Phoenix Baker',
    idDiagnosis: '23',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
  {
    id: 3,
    nama: 'Lana Steiner',
    idDiagnosis: '24',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
  {
    id: 4,
    nama: 'Demi Wilkinson',
    idDiagnosis: '25',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
  {
    id: 5,
    nama: 'Candice Wu',
    idDiagnosis: '26',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
  {
    id: 6,
    nama: 'Candice Wu',
    idDiagnosis: '27',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
  {
    id: 7,
    nama: 'Candice Wu',
    idDiagnosis: '28',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
  {
    id: 8,
    nama: 'Candice Wu',
    idDiagnosis: '29',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
  {
    id: 9,
    nama: 'Candice Wu',
    idDiagnosis: '29',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
  {
    id: 10,
    nama: 'Candice Wu',
    idDiagnosis: '29',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
  {
    id: 11,
    nama: 'Candice Wu',
    idDiagnosis: '29',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
  {
    id: 12,
    nama: 'Candice Wu',
    idDiagnosis: '29',
    hasilAI: 'Lorem Ipsum dolor sit..',
    diagnosisDokter: 'Lorem Ipsum dolor sit..',
  },
];

export default function RiwayatDokter() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = dummyData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(dummyData.length / itemsPerPage);

  return (
    <div className='flex min-h-screen'>
      <NavbarDoc toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 p-6 bg-gray-50 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } overflow-y-auto`}
      >
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>Riwayat</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='hidden md:block'>
          <h1 className='text-3xl font-bold mb-6 text-black'>Riwayat</h1>
        </div>

        <div className='bg-white p-6 rounded-lg '>
          <h2 className='text-xl font-semibold mb-4 text-black'>
            Daftar Riwayat
          </h2>

          <div className='overflow-x-auto'>
            <table className='min-w-full table-auto'>
              <thead className='bg-gray-50 border-b'>
                <tr>
                  <th className='px-4 py-4 text-center text-sm font-semibold text-black'>
                    No.
                  </th>
                  <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                    Nama Pasien
                  </th>
                  <th className='px-4 py-4 text-center text-sm font-semibold text-black'>
                    ID Diagnosis
                  </th>
                  <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                    Hasil Diagnosis AI
                  </th>
                  <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                    Diagnosis Dokter
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={item.id} className='border-b'>
                    <td className='px-4 py-6 text-black text-center'>
                      {index + 1 + (currentPage - 1) * itemsPerPage}
                    </td>
                    <td className='px-4 py-6 text-black'>
                      <p className='text-sm font-medium'>{item.nama}</p>
                    </td>
                    <td className='px-4 py-6 text-black text-center'>
                      {item.idDiagnosis}
                    </td>
                    <td className='px-4 py-6 text-black'>{item.hasilAI}</td>
                    <td className='px-4 py-6 text-black'>
                      {item.diagnosisDokter}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
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
                        onClick={() => paginate(index + 1)}
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
