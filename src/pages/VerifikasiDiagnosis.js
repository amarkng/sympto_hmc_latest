import React, { useState } from 'react';
import NavbarDoc from '../app/components/NavbarDoc';
import {
  FaChevronLeft,
  FaChevronRight,
  FaBars,
  FaEllipsisV,
  FaTimes,
} from 'react-icons/fa';

export default function VerifikasiDiagnosis() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = (patient) => {
    setSelectedPatient(patient);
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = () => {
    alert('Data berhasil disimpan!');
    setIsModalOpen(false);
  };

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const dataPasien = [
    {
      id: 1,
      nama: 'Olivia Rhye',
      diagnosisId: 22,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Demam tinggi',
        'Sakit dada',
        'Sulit bernapas',
        'Tidak nafsu makan',
      ],
      diagnosisAI: 'Radang Paru-Paru',
    },
    {
      id: 2,
      nama: 'Phoenix Baker',
      diagnosisId: 23,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Batuk berdahak',
        'Demam ringan',
        'Sakit tenggorokan',
        'Kelelahan',
      ],
      diagnosisAI: 'Infeksi Saluran Pernapasan',
    },
    {
      id: 3,
      nama: 'Lana Steiner',
      diagnosisId: 24,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: ['Pusing', 'Mual', 'Gangguan pencernaan', 'Kelelahan'],
      diagnosisAI: 'Radang Lambung',
    },
    {
      id: 4,
      nama: 'Demi Wilkinson',
      diagnosisId: 25,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Sakit kepala sebelah',
        'Sensitivitas terhadap cahaya',
        'Mual',
        'Gangguan penglihatan',
      ],
      diagnosisAI: 'Migrain',
    },
    {
      id: 5,
      nama: 'Candice Wu',
      diagnosisId: 26,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Nyeri sendi',
        'Bengkak di lutut',
        'Sulit bergerak',
        'Kekakuan di pagi hari',
      ],
      diagnosisAI: 'Arthritis (Radang Sendi)',
    },
    {
      id: 6,
      nama: 'Lana Steiner',
      diagnosisId: 24,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Batuk berdahak',
        'Demam ringan',
        'Sakit tenggorokan',
        'Kelelahan',
      ],
      diagnosisAI: 'Infeksi Saluran Pernapasan',
    },
    {
      id: 7,
      nama: 'Demi Wilkinson',
      diagnosisId: 25,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Demam tinggi',
        'Sakit dada',
        'Sulit bernapas',
        'Tidak nafsu makan',
      ],
      diagnosisAI: 'Radang Paru-Paru',
    },
    {
      id: 8,
      nama: 'Candice Wu',
      diagnosisId: 26,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Demam tinggi',
        'Sakit dada',
        'Sulit bernapas',
        'Tidak nafsu makan',
      ],
      diagnosisAI: 'Radang Paru-Paru',
    },
    {
      id: 9,
      nama: 'Candice Wu',
      diagnosisId: 26,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Demam tinggi',
        'Sakit dada',
        'Sulit bernapas',
        'Tidak nafsu makan',
      ],
      diagnosisAI: 'Infeksi Saluran Pernapasan	',
    },
    {
      id: 10,
      nama: 'Candice Wu',
      diagnosisId: 26,
      hasilDokter: 'Lorem Ipsum dolor sit..',
      keluhan: [
        'Demam tinggi',
        'Sakit dada',
        'Sulit bernapas',
        'Tidak nafsu makan',
      ],
      diagnosisAI: 'Radang Paru-Paru',
    },
  ];

  const totalPages = Math.ceil(dataPasien.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataPasien.slice(indexOfFirstItem, indexOfLastItem);

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
    <div className='flex min-h-screen'>
      <NavbarDoc toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 p-6 bg-gray-50 transition-all duration-300 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } overflow-y-auto`}
        style={{ maxHeight: '100vh' }}
      >
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600 '>Symptosense</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <h1 className='hidden sm:block text-3xl font-bold text-black'>
            Verifikasi Diagnosis
          </h1>
        </div>

        <div className='bg-white p-4 md:p-7 rounded-lg shadow-lg w-full max-w-6x2 mx-auto mb-6'>
          <h2 className='text-xl font-semibold mb-4 text-black'>
            Daftar Verifikasi Pasien
          </h2>

          <div className='overflow-x-auto mb-auto min-h-[350px]'>
            <table className='min-w-full table-auto'>
              <thead className='bg-gray-50 border-b'>
                <tr>
                  <th className='px-2 md:px-4 py-4  text-sm font-semibold text-gray-table text-center'>
                    No.
                  </th>
                  <th className='px-2 md:px-4 py-4  text-sm font-semibold text-gray-table text-left'>
                    Nama Pasien
                  </th>
                  <th className='hidden sm:table-cell px-2 md:px-4 py-4  text-sm font-semibold text-gray-table text-center'>
                    ID Diagnosis
                  </th>
                  <th className='hidden sm:table-cell px-2 md:px-4 py-4 text-sm font-semibold text-gray-table text-left'>
                    Diagnosis AI
                  </th>
                  <th className='hidden sm:table-cell px-2 md:px-4 py-4 text-sm font-semibold text-gray-table text-left'>
                    Diagnosis Dokter
                  </th>
                  <th className='px-2 md:px-4 py-4  text-sm font-semibold text-gray-table text-center'>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((pasien, index) => (
                  <tr key={pasien.id} className='border-b'>
                    <td className='px-2 py-8 text-gray-table text-center'>
                      {indexOfFirstItem + index + 1}
                    </td>
                    <td className='px-2 md:px-4 py-8 text-black text-left '>
                      {pasien.nama}
                    </td>
                    <td className='hidden sm:table-cell px-2 md:px-4 py-8 text-gray-table text-center'>
                      {pasien.diagnosisId}
                    </td>
                    <td className='hidden sm:table-cell px-2 md:px-4 py-8 text-gray-table text-left'>
                      {pasien.diagnosisAI}
                    </td>
                    <td className='hidden sm:table-cell px-2 md:px-4 py-8 text-gray-table text-left'>
                      {pasien.hasilDokter}
                    </td>
                    <td className='px-2 md:px-4 py-8 text-center'>
                      <button
                        className='text-white min-w-[80px] sm:min-w-[90px] bg-blue-600 p-2 px-3 py-1  rounded-lg text-sm hover:bg-blue-700'
                        onClick={() => toggleModal(pasien)}
                      >
                        Details
                      </button>
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

        {/* Modal */}
        {isModalOpen && (
          <div className='fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50'>
            <div className='bg-white w-11/12 sm:w-4/6 md:w-3/5 lg:w-2/4 max-h-[80vh] rounded-xl shadow-lg overflow-y-auto'>
              <div className='relative bg-blue-600 rounded-t-xl p-4 flex justify-center items-center'>
                <h2 className='text-lg sm:text-xl font-bold text-white'>
                  Detail Pasien
                </h2>
                <button
                  onClick={() => toggleModal(null)}
                  className='absolute right-4 text-white hover:text-gray-200'
                >
                  <FaTimes />
                </button>
              </div>

              {/* Konten Modal */}
              <div className='p-6'>
                {selectedPatient && (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* Kolom kiri */}
                    <div>
                      <div className='mb-4'>
                        <label className='block font-semibold text-black mb-2 justify-'>
                          Nama Pasien
                        </label>
                        <input
                          type='text'
                          className='border border-gray-300 rounded-md p-3 w-full text-black'
                          value={selectedPatient.nama}
                          readOnly
                        />
                      </div>
                      <div className='mb-4'>
                        <label className='block font-semibold text-black mb-2'>
                          Keluhan
                        </label>
                        <textarea
                          className='border border-gray-300 rounded-md p-3 w-full text-black h-32 resize-none'
                          value={selectedPatient.keluhan.join('\n')}
                          readOnly
                        />
                      </div>
                      <div className='mb-4'>
                        <label className='block font-semibold text-black mb-2'>
                          Status
                        </label>
                        <select className='border border-gray-300 rounded-md p-3 w-full text-black'>
                          <option>Pilih Status</option>
                          <option>Confirmed</option>
                          <option>Rejected</option>
                        </select>
                      </div>
                    </div>

                    {/* Kolom kanan */}
                    <div>
                      <div className='mb-4'>
                        <label className='block font-semibold text-black mb-2'>
                          ID Diagnosis
                        </label>
                        <input
                          type='text'
                          className='border border-gray-300 rounded-md p-3 w-full text-black'
                          value={selectedPatient.diagnosisId}
                          readOnly
                        />
                      </div>
                      <div className='mb-4'>
                        <label className='block font-semibold text-black mb-2'>
                          Hasil Diagnosis AI
                        </label>
                        <input
                          type='text'
                          className='border border-gray-300 rounded-md p-3 w-full text-black'
                          value={selectedPatient.diagnosisAI}
                          readOnly
                        />
                      </div>
                      <div className='mb-4'>
                        <label className='block font-semibold text-black mb-2'>
                          Diagnosis Dokter
                        </label>
                        <textarea
                          className='border border-gray-300 rounded-md p-3 w-full text-black h-24 resize-none'
                          placeholder='Tulisan hasil diagnosis dokter...'
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className='flex justify-center mt-6'>
                  <button
                    onClick={handleSubmit}
                    className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 text-base'
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
