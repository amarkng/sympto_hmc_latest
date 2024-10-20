import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import NavbarPatient from '../app/components/NavbarPatient';
import HistoryDiagnosisP from '../app/components/HistoryDiagnosisP';
import { TbEyeSearch } from 'react-icons/tb';
import Image from 'next/image';

export default function DiagnosisP() {
  const [symptoms, setSymptoms] = useState([
    'Sesak napas',
    'Suara serak',
    'Batuk terus-menerus',
    'Nyeri dada',
  ]);
  const aiDiagnosis = {
    namaPenyakit: 'Demam Berdarah',
    gejala: ['Sesak napas', 'Suara serak', 'Batuk terus-menerus', 'Nyeri dada'],
  };

  const [newSymptom, setNewSymptom] = useState('');
  const [isAddSymptomModalOpen, setIsAddSymptomModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddSymptom = (e) => {
    e.preventDefault();
    if (newSymptom.trim() !== '') {
      setSymptoms([...symptoms, newSymptom]);
      setNewSymptom('');
    }
  };

  const handleDeleteSymptom = (symptomToDelete) => {
    setSymptoms(symptoms.filter((symptom) => symptom !== symptomToDelete));
  };

  return (
    <div className='flex min-h-screen bg-gray-100'>
      <NavbarPatient
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div
        className={`flex-1 p-4 lg:p-8 bg-gray-100 transition-all duration-300 min-w-0 ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        }`}
      >
        {/* Hamburger mobile */}
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

        <section className='bg-white p-6 rounded-lg shadow mb-8 w-full max-w-full overflow-hidden'>
          <h2 className='text-md lg:text-xl font-bold mb-4 text-left text-black'>
            Cek Diagnosis dengan AI
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
            {symptoms.map((symptom, index) => (
              <div
                key={index}
                onDoubleClick={() => handleDeleteSymptom(symptom)}
                className='border border-blue-400 text-black flex justify-center items-center min-w-[150px] min-h-[60px] px-6 py-4 rounded-full text-lg font-semibold cursor-pointer hover:bg-blue-50 transition'
              >
                {symptom}
              </div>
            ))}
            <button
              onClick={() => setIsAddSymptomModalOpen(true)}
              className='border border-blue-400 text-blue-600 flex justify-center items-center min-w-[150px] min-h-[60px] px-6 py-4 rounded-full text-lg font-semibold cursor-pointer hover:bg-blue-100 transition'
            >
              + Tambah Gejala
            </button>
          </div>

          <div className='text-center'>
            <button
              className='bg-blue-600 text-white px-8 py-3 rounded-full flex items-center justify-center mx-auto hover:bg-blue-700 transition'
              onClick={() => setIsResultModalOpen(true)}
            >
              <TbEyeSearch className='mr-2' />
              Lihat Hasil Gejala
            </button>
          </div>
        </section>

        <section className='w-full max-w-full overflow-x-auto '>
          <HistoryDiagnosisP />
        </section>
      </div>

      {isAddSymptomModalOpen && (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white rounded-xl shadow-lg w-11/12 sm:w-4/6 md:w-3/5 lg:w-2/4 max-h-screen overflow-y-auto'>
            <div className='relative bg-blue-600 rounded-t-xl p-4 flex justify-center items-center'>
              <h2 className='text-lg sm:text-xl font-bold text-white'>
                Tambah Gejala
              </h2>
              <button
                onClick={() => setIsAddSymptomModalOpen(false)}
                className='absolute right-4 text-white hover:text-gray-200'
              >
                ✕
              </button>
            </div>

            <div className='p-6'>
              <input
                type='text'
                placeholder='Cari gejala penyakit...'
                className='w-full p-4 mb-4 border border-gray-300 rounded-lg text-black'
                value={newSymptom}
                onChange={(e) => setNewSymptom(e.target.value)}
              />
              <button
                onClick={handleAddSymptom}
                className='bg-blue-500 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700'
              >
                Tambah Gejala
              </button>
            </div>
          </div>
        </div>
      )}
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
              <div className='overflow-x-auto'>
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
                        nama: 'Candice Wu',
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
