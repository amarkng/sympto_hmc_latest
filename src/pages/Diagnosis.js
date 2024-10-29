import React, { useState } from 'react';
import { TbEye, TbSearch, TbPlus, TbTrash } from 'react-icons/tb';
import { MdOutlineEdit } from 'react-icons/md';

import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';

export default function Diagnosis() {
  const [symptoms, setSymptoms] = useState([
    'Sesak napas',
    'Suara serak',
    'Batuk terus-menerus',
  ]);

  const gejalaList = [
    'Demam tinggi',
    'Sakit dada',
    'Sulit bernapas',
    'Tidak nafsu makan',
    'Kulit Pucat',
    'Mudah lelah',
    'Mual dan muntah',
    'Diare',
  ];

  const [isAddSymptomModalOpen, setIsAddSymptomModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

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
    <div className='flex flex-col min-h-screen'>
      <Navbar />

      <section className='flex-grow flex items-center justify-center bg-white'>
        <div className='max-w-full w-full px-4 lg:px-0'>
          <h1 className='text-2xl lg:text-4xl font-bold text-black text-center mb-6 mt-2'>
            Periksa Kesehatanmu dengan <br /> Prediksi AI Akurat!
          </h1>

          <div className='bg-gray-50 p-12 max-w-7xl mx-auto rounded-lg'>
            <h2 className='text-lg font-semibold text-gray-700 text-center mb-6'>
              Pilih gejala untuk mendapatkan prediksi AI
            </h2>

            <div className='flex flex-wrap justify-center gap-4 mb-6'>
              {symptoms.map((symptom, index) => (
                <div
                  key={index}
                  className='relative group px-6 py-3 rounded-xl text-center border border-blue-400 text-black transition min-w-[140px] flex items-center justify-center'
                >
                  {symptom}

                  {isEditMode && (
                    <button
                      className='absolute inset-0 bg-hapus-diag rounded-xl bg-opacity-100  text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition'
                      onClick={() => handleDeleteSymptom(symptom)}
                    >
                      <TbTrash className='text-lg mr-2' />
                      Hapus
                    </button>
                  )}
                </div>
              ))}

              <div
                className='symptom-button border-dashed border-2 border-blue-500 bg-blue-300 text-white text-bold px-8 py-3 rounded-xl cursor-pointer hover:bg-blue-200 transition min-w-[140px] flex items-center justify-center gap-2'
                onClick={() => setIsAddSymptomModalOpen(true)}
              >
                <TbPlus className='text-lg' />
                Tambah Gejala
              </div>
            </div>

            <div className='flex justify-center gap-4 lg:mt-12'>
              <button
                className={`${
                  isEditMode ? 'bg-yellow-600' : 'bg-yellow-400'
                } text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 text-sm sm:text-base md:text-lg rounded-full hover:bg-yellow-600 transition flex items-center justify-center gap-2`}
                onClick={() => setIsEditMode(!isEditMode)}
              >
                <MdOutlineEdit className='text-xl' />
                Edit
              </button>

              <button
                className='bg-blue-950 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 text-sm sm:text-base md:text-lg rounded-full hover:bg-blue-1000 transition flex items-center justify-center gap-2'
                onClick={() => setIsResultModalOpen(true)}
              >
                <TbEye className='text-xl' />
                Lihat Hasil Gejala
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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
            </div>

            <div className='p-4'>
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
          <div className='bg-white rounded-xl shadow-lg w-11/12 sm:w-4/6 md:w-3/5 lg:w-2/4 max-h-screen overflow-y-auto'>
            <div className='relative bg-blue-600 p-4 rounded-t-xl flex justify-center items-center'>
              <h2 className='text-lg sm:text-xl font-bold text-white'>
                Hasil Diagnosis AI
              </h2>
              <button
                onClick={() => setIsResultModalOpen(false)}
                className='absolute right-4 text-white hover:text-gray-200'
              >
                ✕
              </button>
            </div>

            <div className='p-6 text-left'>
              <p className='text-lg text-gray-700'>Nama Penyakit:</p>
              <p className='font-bold text-xl text-black mb-4'>
                Demam Berdarah
              </p>

              <p className='text-lg text-gray-700 mb-2'>Gejala:</p>
              <div className='border rounded-lg overflow-hidden'>
                <ul className='divide-y divide-gray-300'>
                  {symptoms.map((symptom, index) => (
                    <li key={index} className='py-3 px-4 text-black'>
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
