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
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                No.
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                Nama Pasien
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                ID Diagnosis
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                Tanggal
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                Hasil Diagnosis AI
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                Diagnosis Dokter
              </th>
              <th className='px-4 py-4 text-left text-sm font-semibold text-black'>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={item.id} className='border-b'>
                <td className='px-4 py-4 text-black'>
                  {indexOfFirstItem + index + 1}
                </td>
                <td className='px-4 py-4 text-black'>{item.patientName}</td>
                <td className='px-4 py-4 text-black'>{item.diagId}</td>
                <td className='px-4 py-4 text-black'>{item.date}</td>
                <td className='px-4 py-4 text-black'>{item.result}</td>
                <td className='px-4 py-4 text-black'>{item.doctorDiagnosis}</td>
                <td className='px-4 py-4'>
                  {item.status === 'Verified' ? (
                    <span className='bg-green-600 text-white px-4 py-2 rounded-lg'>
                      Verifikasi
                    </span>
                  ) : item.status === 'Ditolak' ? (
                    <span className='bg-red-600 text-white px-4 py-2 rounded-lg'>
                      Ditolak
                    </span>
                  ) : (
                    <span className=' bg-white text-black px-4 py-2 rounded-lg shadow-md'>
                      Menunggu
                    </span>
                  )}
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
          className={`py-1 px-3 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-200 flex items-center ${
            currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          <FaChevronLeft className='mr-2' /> Previous
        </button>

        <ul className='flex space-x-1'>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(index + 1)}
                className={`py-1 px-3 rounded-md border text-sm ${
                  currentPage === index + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-700'
                } hover:bg-blue-500 hover:text-white`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`py-1 px-3 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-200 flex items-center ${
            currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          Next <FaChevronRight className='ml-2' />
        </button>
      </div>
    </div>
  );
}
