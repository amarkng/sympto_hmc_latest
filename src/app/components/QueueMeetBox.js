import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const generateRandomName = () => {
  const firstNames = ['John', 'Jane', 'Alex', 'Emily'];
  const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown'];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
};

const generateDummyData = () => {
  const dummyPatients = [];
  for (let i = 1; i <= 21; i++) {
    dummyPatients.push({ name: generateRandomName(), role: 'Pasien' });
  }
  return dummyPatients;
};

export default function QueueMeetBox() {
  const [patients, setPatients] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPatients(generateDummyData());
  }, []);

  const totalPages = Math.ceil(patients.length / itemsPerPage);

  const indexOfLastPatient = currentPage * itemsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - itemsPerPage;
  const currentPatients = patients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='bg-white p-6 rounded-lg shadow-lg flex flex-col h-full justify-between'>
      <h2 className='text-xl font-bold text-gray-800'>Antrian Meet</h2>

      <div className='flex-grow'>
        <ul className='mt-4 space-y-6 min-h-[320px]'>
          {currentPatients.map((patient, index) => (
            <li key={index} className='flex items-center space-x-4'>
              <Image
                src='/assets/images/placeholder4.jpg'
                alt={patient.name}
                className='w-10 h-10 rounded-full'
                width={40}
                height={40}
              />
              <div>
                <h3 className='text-gray-900 font-semibold'>{patient.name}</h3>
                <p className='text-sm text-gray-500'>{patient.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-6 flex justify-between items-center'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`w-24 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous
        </button>
        <span className='text-sm font-semibold text-gray-700'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`w-24 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
