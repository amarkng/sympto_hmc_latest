import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import NavbarPatient from '../app/components/NavbarPatient';
import HistoryDiagnosisP from '../app/components/HistoryDiagnosisP';
import { TbEye, TbPlus, TbSearch, TbTrash } from 'react-icons/tb';
import { MdOutlineEdit } from 'react-icons/md';
import Image from 'next/image';

export default function DiagnosisP() {
  const [symptoms, setSymptoms] = useState([
    'Sesak napas',
    'Suara serak',
    'Batuk terus-menerus',
    'Nyeri dada',
    'Tubuh Lemas',
    'Sakit Kepala',
  ]);
  const gejalaList = [
    'Demam tinggi',
    'Sakit kepala',
    'Tubuh lemas',
    'Sakit tenggorokan',
    'Mual',
    'Muntah',
    'Diare',
  ];

  const [newSymptom, setNewSymptom] = useState('');
  const [isAddSymptomModalOpen, setIsAddSymptomModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddSymptom = (symptom) => {
    if (!symptoms.includes(symptom)) {
      setSymptoms([...symptoms, symptom]);
    }
  };

  const handleDeleteSymptom = (symptomToDelete) => {
    setSymptoms(symptoms.filter((symptom) => symptom !== symptomToDelete));
  };

  const filteredGejala = gejalaList.filter((gejala) =>
    gejala.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='flex min-h-screen bg-gray-100'>
      <NavbarPatient
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div
        className={`flex-1 p-6 bg-gray-50 transition-all duration-300 overflow-auto ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } overflow-y-auto`}
        style={{ maxHeight: '100vh' }}
      >
        <div className='md:hidden flex justify-between items-center mb-6'>
          <h1 className='text-2xl font-bold text-blue-600'>SymptoSense</h1>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl text-gray-700' />
          </button>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <h1 className='hidden sm:block text-2xl font-bold text-black'>
            Diagnosis
          </h1>
        </div>

        {/* Diagnosis Section */}
        <section
          className={`bg-white p-6 rounded-lg shadow mb-8 w-full max-w-full
          ${isSidebarOpen ? 'hidden' : 'block'}`}
        >
          {' '}
          <h2 className='text-md lg:text-xl font-bold mb-4 text-left text-black'>
            Cek Diagnosis dengan AI
          </h2>
          <div
            className={`flex flex-wrap justify-center gap-4 mb-6 
            }`}
          >
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                className='relative group flex-grow-0 flex-shrink-0 basis-[23%] px-10 py-5 rounded-xl text-center border border-blue-400 text-black transition min-w-[160px] flex items-center justify-center'
              >
                {symptom}

                {isEditMode && (
                  <button
                    className='absolute inset-0 bg-hapus-diag rounded-xl bg-opacity-100 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition'
                    onClick={() => handleDeleteSymptom(symptom)}
                  >
                    <TbTrash className='text-lg mr-2' />
                    Hapus
                  </button>
                )}
              </div>
            ))}
            <button
              onClick={() => setIsAddSymptomModalOpen(true)}
              className='symptom-button border-dashed border-2 border-blue-500 bg-blue-300 text-white text-bold px-4 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer hover:bg-blue-200 transition min-w-[120px] flex items-center justify-center gap-1 lg:gap-2'
            >
              <TbPlus className='lg:text-lg text-md mr-2' />
              Tambah Gejala
            </button>
          </div>
          <div className='flex justify-center gap-6 lg:mt-12'>
            <button
              className={`${
                isEditMode ? 'bg-yellow-600' : 'bg-yellow-400'
              } text-white lg:px-6 lg:py-4  px-3 py-2 text-base  lg:text-lg text-md rounded-full hover:bg-yellow-600 transition flex items-center justify-center gap-1 lg:gap-2`}
              onClick={() => setIsEditMode(!isEditMode)}
            >
              <MdOutlineEdit className='lg:text-lg text-md mr-1' />
              Edit
            </button>

            <button
              className='bg-blue-950 hover:bg-black text-white lg:px-6 lg:py-4 px-3 py-2 text-base md:text-lg rounded-full transition flex items-center justify-center gap-1 lg:gap-2'
              onClick={() => setIsResultModalOpen(true)}
            >
              <TbEye className='text-2xl' />
              Lihat Hasil Gejala
            </button>
          </div>
        </section>

        <section className='w-full max-w-full overflow-x-auto '>
          <HistoryDiagnosisP />
        </section>
      </div>

      {/* Modal Tambah Gejala */}
      {isAddSymptomModalOpen && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white rounded-xl shadow-lg w-11/12 sm:w-4/6 md:w-3/5 lg:w-2/4 max-h-screen overflow-y-auto'>
            <div className='relative bg-blue-600 p-4 rounded-t-xl flex justify-center items-center'>
              <h2 className='text-lg sm:text-xl font-bold text-white'>
                Tambah Gejala
              </h2>
              <button
                onClick={() => setIsAddSymptomModalOpen(false)}
                className='absolute right-4 top-4 w-8 h-8 bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white text-xl hover:bg-blue-700'
              >
                &times;
              </button>
            </div>

            <div className='p-4'>
              <div className='relative'>
                <TbSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl' />
                <input
                  type='text'
                  placeholder='Cari gejala penyakit...'
                  className='w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <h3 className='font-semibold text-lg text-black mb-2'>
                Pilih Gejala
              </h3>
              <div className='border rounded-lg overflow-hidden'>
                <ul className='divide-y divide-gray-300'>
                  {filteredGejala.map((gejala, index) => (
                    <li
                      key={index}
                      className='py-3 px-4 hover:bg-gray-100 cursor-pointer text-black'
                      onClick={() => {
                        handleAddSymptom(gejala);
                        setIsAddSymptomModalOpen(false);
                      }}
                    >
                      {gejala}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Modal Hasil Diagnosis */}
      {isResultModalOpen && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white rounded-xl shadow-lg w-11/12 sm:w-4/6 md:w-3/5 lg:w-3/5 xl:w-2/3 max-h-screen overflow-y-auto'>
            <div className='relative bg-blue-600 rounded-t-xl p-4 flex justify-between items-center'>
              <h2 className='text-lg sm:text-xl font-bold text-white'>
                Hasil Diagnosis AI
              </h2>
              <button
                onClick={() => setIsResultModalOpen(false)}
                className='text-white hover:text-gray-200'
              >
                ✕
              </button>
            </div>

            <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
              {/* Bagian Kiri */}
              <div className='p-6'>
                <p className='text-lg text-gray-700'>Nama Penyakit:</p>
                <p className='font-bold text-xl text-black mb-4'>
                  Demam Berdarah
                </p>

                <p className='font-semibold text-lg text-gray-700 mb-2'>
                  Gejala:
                </p>
                <div className='border rounded-lg overflow-hidden'>
                  <ul className='divide-y divide-gray-300'>
                    {[
                      'Demam tinggi',
                      'Sakit dada',
                      'Sulit bernafas',
                      'Tidak nafsu makan',
                    ].map((gejala, index) => (
                      <li key={index} className='py-3 px-4 text-black'>
                        {gejala}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bagian Kanan*/}
              <div className='overflow-y-auto max-h-[50vh] '>
                <h3 className='text-lg font-semibold text-black mb-4'>
                  Dokter yang aktif
                </h3>
                <table className='w-full table-auto'>
                  <thead>
                    <tr className='bg-gray-50 text-left'>
                      <th className='py-3 px-6 text-sm font-semibold text-gray-600'>
                        No.
                      </th>
                      <th className='py-3 px-6 text-sm font-semibold text-gray-600'>
                        Nama Dokter
                      </th>
                      <th className='py-3 px-6 text-sm font-semibold text-gray-600 text-center'>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        nama: 'Olivia Rhye',
                        spesialis: 'Dokter Kandungan',
                        aktif: true,
                      },
                      {
                        nama: 'Phoenix Baker',
                        spesialis: 'Dokter Mata',
                        aktif: false,
                      },
                      {
                        nama: 'Lana Steiner',
                        spesialis: 'Dokter THT',
                        aktif: false,
                      },
                      {
                        nama: 'Demi Wilkinson',
                        spesialis: 'Dokter Umum',
                        aktif: false,
                      },
                      {
                        nama: 'Michael Jordan',
                        spesialis: 'Dokter Anak',
                        aktif: true,
                      },
                      {
                        nama: 'Sarah Connor',
                        spesialis: 'Dokter Anak',
                        aktif: false,
                      },
                      {
                        nama: 'John Doe',
                        spesialis: 'Dokter Anak',
                        aktif: true,
                      },
                      {
                        nama: 'Jane Smith',
                        spesialis: 'Dokter Anak',
                        aktif: true,
                      },
                    ].map((dokter, index) => (
                      <tr key={index} className='odd:bg-white even:bg-gray-50'>
                        <td className='py-4 px-6 text-black text-center'>
                          {index + 1}
                        </td>
                        <td className='py-4 px-6 text-black'>
                          <div className='flex items-center space-x-4'>
                            <div className='relative w-10 h-10'>
                              <Image
                                src='/assets/images/placeholder2.png'
                                alt={`Foto ${dokter.nama}`}
                                className='rounded-full'
                                width={64}
                                height={64}
                              />
                            </div>
                            <div>
                              <p className='text-black font-medium'>
                                {dokter.nama}
                              </p>
                              <p className='text-sm text-gray-500'>
                                {dokter.spesialis}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className='py-4 px-6 text-center'>
                          <button
                            className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                              dokter.aktif
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            Pilih
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
