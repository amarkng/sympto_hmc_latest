import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function HistoryDiagnosisP() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const historyData = [
    {
      id: 1,
      patientName: 'Lala Aisyah',
      diagId: 22,
      date: '12/12/2022',
      result: 'Lorem Ipsum dolor sit amet',
      doctorDiagnosis: 'Lorem Ipsum dolor sit amet',
      status: 'Verified',
    },
    {
      id: 2,
      patientName: 'Lala Aisyah',
      diagId: 23,
      date: '12/12/2022',
      result: 'Lorem Ipsum dolor sit amet',
      doctorDiagnosis: 'Lorem Ipsum dolor sit amet',
      status: 'Ditolak',
    },
    {
      id: 3,
      patientName: 'Lala Aisyah',
      diagId: 24,
      date: '12/12/2022',
      result: 'Lorem Ipsum dolor sit amet',
      doctorDiagnosis: 'Lorem Ipsum dolor sit amet',
      status: 'Menunggu',
    },
    {
      id: 4,
      patientName: 'Lala Aisyah',
      diagId: 25,
      date: '12/12/2022',
      result: 'Lorem Ipsum dolor sit amet',
      doctorDiagnosis: 'Lorem Ipsum dolor sit amet',
      status: 'Menunggu',
    },
    {
      id: 5,
      patientName: 'Lala Aisyah',
      diagId: 26,
      date: '12/12/2022',
      result: 'Lorem Ipsum dolor sit amet',
      doctorDiagnosis: 'Lorem Ipsum dolor sit amet',
      status: 'Ditolak',
    },
    {
      id: 6,
      patientName: 'Lala Aisyah',
      diagId: 26,
      date: '12/12/2022',
      result: 'Lorem Ipsum dolor sit amet',
      doctorDiagnosis: 'Lorem Ipsum dolor sit amet',
      status: 'Menunggu',
    },
    {
      id: 7,
      patientName: 'Lala Aisyah',
      diagId: 26,
      date: '12/12/2022',
      result: 'Lorem Ipsum dolor sit amet',
      doctorDiagnosis: 'Lorem Ipsum dolor sit amet',
      status: 'Verified',
    },
    {
      id: 8,
      patientName: 'Lala Aisyah',
      diagId: 26,
      date: '12/12/2022',
      result: 'Lorem Ipsum dolor sit amet',
      doctorDiagnosis: 'Lorem Ipsum dolor sit amet',
      status: 'Menunggu',
    },
  ];

  const totalPages = Math.ceil(historyData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = historyData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4 text-black'>
        History Diagnosis
      </h2>

      <div className='overflow-x-auto'>
        <table className='min-w-full table-auto'>
          <thead>
            <tr>
              <th className='px-4 py-4 text-center text-sm font-semibold text-gray-table'>
                No.
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-gray-table'>
                Nama Pasien
              </th>
              <th className='px-4 py-4 text-center text-sm font-semibold text-gray-table'>
                ID Diagnosis
              </th>
              <th className='px-4 py-4 text-center text-sm font-semibold text-gray-table'>
                Tanggal
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-gray-table'>
                Hasil Diagnosis AI
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-gray-table'>
                Diagnosis Dokter
              </th>
              <th className='px-4 py-4 text-sm font-semibold text-gray-table text-center'>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id} className='border-b'>
                <td className='px-4 py-4 text-gray-table text-center'>
                  {indexOfFirstItem + index + 1}
                </td>
                <td className='px-4 py-4 text-black'>{item.patientName}</td>
                <td className='px-4 py-4 text-gray-table text-center'>
                  {item.diagId}
                </td>
                <td className='px-4 py-4 text-gray-table text-center'>
                  {item.date}
                </td>
                <td className='px-4 py-4 text-gray-table'>{item.result}</td>
                <td className='px-4 py-4 text-gray-table'>
                  {item.doctorDiagnosis}
                </td>
                <td className='px-4 py-4 text-center'>
                  {item.status === 'Verified' ? (
                    <span className='bg-green-600 text-white px-2 py-1 rounded-lg text-sm'>
                      Verifikasi
                    </span>
                  ) : item.status === 'Ditolak' ? (
                    <span className='bg-red-600 text-white px-2 py-1 rounded-lg text-sm'>
                      Ditolak
                    </span>
                  ) : (
                    <span className=' bg-white text-black px-2 border py-1 rounded-lg shadow-sm text-sm'>
                      Menunggu
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='flex justify-between items-center mt-4'>
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`py-1 px-3 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-200 flex items-center sm:text-sm text-xs sm:py-2 sm:px-4 ${
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
          className={`py-1 px-3 text-black bg-white border border-gray-300 rounded-md hover:bg-gray-200 flex items-center sm:text-sm text-xs sm:py-2 sm:px-4 ${
            currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Next <FaChevronRight className='ml-2' />
        </button>
      </div>
    </div>
  );
}
