import { useState } from 'react';

export default function ObatVitamin() {
  const items = [
    {
      name: 'Batuk',
      image: '/assets/images/placeholder3.png',
      details: {
        penjelasan:
          'Batuk adalah refleks untuk membersihkan saluran pernapasan.',
        penyebab: 'Infeksi virus, alergi, asma.',
        obat: 'Sirup obat batuk, permen pelega tenggorokan, minum air hangat.',
      },
    },
    {
      name: 'Flu',
      image: '/assets/images/placeholder3.png',
      details: {
        penjelasan:
          'Flu adalah infeksi virus yang menyerang sistem pernapasan.',
        penyebab: 'Virus influenza.',
        obat: 'Obat flu, banyak istirahat, minum air putih.',
      },
    },
    {
      name: 'Diare',
      image: '/assets/images/placeholder3.png',
      details: {
        penjelasan: 'Diare adalah buang air besar dengan tinja yang encer.',
        penyebab: 'Infeksi bakteri, virus, makanan yang terkontaminasi.',
        obat: 'Obat diare, oralit, minum banyak cairan.',
      },
    },
    {
      name: 'Cacar',
      image: '/assets/images/placeholder3.png',
      details: {
        penjelasan: 'Cacar adalah infeksi virus yang menyebabkan ruam kulit.',
        penyebab: 'Virus varicella-zoster.',
        obat: 'Obat antivirus, obat pereda gatal, istirahat.',
      },
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className='bg-white py-16'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
          Obat & Vitamin
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedItem(item)}
              className='flex flex-col items-center bg-white p-4 sm:p-6 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition cursor-pointer'
            >
              <img
                src={item.image}
                alt={item.name}
                className='h-20 w-20 sm:h-24 sm:w-24 object-cover rounded-full'
              />
              <p className='text-lg font-semibold text-gray-800 mt-4'>
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 py-8 overflow-y-auto'>
            <div className='bg-white rounded-lg shadow-lg w-full max-w-[500px] p-6 mx-auto'>
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                {selectedItem.name}
              </h3>

              <div className='mb-4'>
                <h4 className='text-lg font-semibold text-gray-800'>
                  Penjelasan
                </h4>
                <p className='text-gray-700'>
                  {selectedItem.details.penjelasan}
                </p>
              </div>

              <div className='mb-4'>
                <h4 className='text-lg font-semibold text-gray-800'>
                  Penyebab
                </h4>
                <p className='text-gray-700'>{selectedItem.details.penyebab}</p>
              </div>

              <div className='mb-4'>
                <h4 className='text-lg font-semibold text-gray-800'>
                  Obat yang Cocok
                </h4>
                <p className='text-gray-700'>{selectedItem.details.obat}</p>
              </div>

              <button
                onClick={() => setSelectedItem(null)}
                className='mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition'
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
