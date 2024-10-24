import React, { useState, useEffect } from 'react';
import NavbarDoc from '../app/components/NavbarDoc';
import { FaChevronLeft, FaChevronRight, FaBars } from 'react-icons/fa';
import Image from 'next/image';

const generateDummyData = (numPatients) => {
  const names = [
    'Olivia Rhye',
    'Phoenix Baker',
    'Lana Steiner',
    'Demi Wilkinson',
    'Candice Wu',
  ];

  const dummyPatients = [];
  for (let i = 0; i < numPatients; i++) {
    dummyPatients.push({
      id: i + 1,
      name: names[i % names.length],
      diagId: 1000 + i + 1,
      aiResult: 'Lorem Ipsum dolor sit..',
      doctorResult: 'Lorem Ipsum dolor sit..',
      status: i % 2 === 0 ? 'Start Meeting' : 'Completed',
    });
  }
  return dummyPatients;
};

export default function KonsultasiDokter() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const dataDump = generateDummyData(12);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataDump.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(dataDump.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openVideoCall = () => {
    setIsVideoOpen(true);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const loadJitsiScript = () => {
      const script = document.createElement('script');
      script.src = 'https://meet.jit.si/external_api.js';
      script.async = true;
      script.onload = () => {
        console.log('Jitsi script loaded');
      };
      document.body.appendChild(script);
    };
    loadJitsiScript();
  }, []);

  useEffect(() => {
    if (isVideoOpen) {
      if (window.JitsiMeetExternalAPI) {
        console.log('JitsiMeetExternalAPI is available');
        const domain = 'meet.jit.si';
        const options = {
          roomName: 'KonsultasiDokterPasienRoom',
          width: '100%',
          height: 500,
          parentNode: document.getElementById('jitsi-container'),
          configOverwrite: {
            startWithAudioMuted: true,
            startWithVideoMuted: true,
          },
        };
        const api = new window.JitsiMeetExternalAPI(domain, options);

        api.addEventListener('videoConferenceJoined', () => {
          console.log('Video conference joined');
        });

        api.addEventListener('error', (error) => {
          console.error('Jitsi error:', error);
        });

        return () => api.dispose();
      } else {
        console.error('JitsiMeetExternalAPI not available');
      }
    }
  }, [isVideoOpen]);

  return (
    <div className='flex min-h-screen'>
      <NavbarDoc toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 p-6 bg-gray-50 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } overflow-y-auto`}
      >
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>Konsultasi</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='hidden sm:block'>
          <h1 className='text-3xl font-bold mb-6 text-black'>Konsultasi</h1>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-lg'>
          <h2 className='text-xl font-semibold mb-4 text-black'>
            Daftar Konsultasi Pasien
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
                  <th className='px-4 py-4 text-center text-sm font-semibold text-black'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((entry, index) => (
                  <tr key={entry.id} className='border-b'>
                    <td className='px-4 py-6 text-black text-center'>
                      {indexOfFirstItem + index + 1}
                    </td>
                    <td className='px-4 py-6 text-black'>
                      <div className='flex items-center'>
                        <Image
                          src='/assets/images/logoPasien.png'
                          alt='avatar'
                          className='w-12 h-12 rounded-full'
                          width={48}
                          height={48}
                        />
                        <div className='ml-3'>
                          <p className='text-sm font-medium'>{entry.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-6 text-black text-center'>
                      {entry.diagId}
                    </td>
                    <td className='px-4 py-6 text-black'>{entry.aiResult}</td>
                    <td className='px-4 py-6 text-black'>
                      {entry.doctorResult}
                    </td>
                    <td className='px-4 py-6 text-center'>
                      {entry.status === 'Start Meeting' ? (
                        <button
                          onClick={openVideoCall}
                          className='bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700'
                        >
                          Start Meeting
                        </button>
                      ) : (
                        <span className='text-gray-500 text-sm'>Completed</span>
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
        {isVideoOpen && (
          <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
            <div className='bg-white w-[90%] max-w-4xl rounded-lg shadow-lg p-6'>
              <div className='bg-blue-600 text-white py-4 px-6 rounded-t-lg flex justify-between items-center'>
                <h2 className='text-xl font-semibold'>Start Meeting</h2>
                <button onClick={() => setIsVideoOpen(false)}>Close</button>
              </div>
              <div
                id='jitsi-container'
                style={{ width: '100%', height: '500px' }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
