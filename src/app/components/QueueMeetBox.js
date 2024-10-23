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
  for (let i = 1; i <= 19; i++) {
    dummyPatients.push({ name: generateRandomName(), role: 'Pasien' });
  }
  return dummyPatients;
};

export default function QueueMeetBox() {
  const [patients, setPatients] = useState([]);
  const itemsPerPage = 7;
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

  const getImageByIndex = (index) => {
    if (index % 3 === 0) {
      return '/assets/images/cewe1.png';
    } else if (index % 3 === 1) {
      return '/assets/images/cowo2.png';
    } else {
      return '/assets/images/cowo3.png';
    }
  };

  return (
    <div className='bg-white p-0 rounded-lg shadow-lg flex-grow flex flex-col h-full'>
      <h2
        className='bg-blue-600 text-white text-xl font-bold text-center lg:py-6 py-3 rounded-t-lg'
        style={{ borderRadius: '12px 12px 0 0' }}
      >
        Antrian Meet
      </h2>

      <div className='flex-grow bg-white px-4 pb-6'>
        <ul className='divide-y divide-gray-300'>
          {currentPatients.map((patient, index) => (
            <li key={index} className='flex items-center space-x-4 py-4'>
              <Image
                src={getImageByIndex(index)}
                alt={patient.name}
                className='w-14 h-14 rounded-full'
                width={48}
                height={48}
              />
              <div>
                <h3 className='text-gray-900 font-semibold'>{patient.name}</h3>
                <p className='text-sm text-gray-500'>{patient.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Pagination */}
      <div className='mb-12 px-4 flex justify-between items-center'>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`py-1 px-3 text-sm font-semibold text-white bg-blue-500 rounded-lg ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Previous
        </button>

        <span className='text-sm font-semibold text-gray-700'>
          Page
          <br /> {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`py-1 px-3 text-sm font-semibold text-white bg-blue-500 rounded-lg ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
