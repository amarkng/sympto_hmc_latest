import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function VerificationCode() {
  const router = useRouter();
  const [buttonText, setButtonText] = useState('01:00');

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonText('Kirim Lagi');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleNextStep = () => {
    router.push('/forgot-password/verification-code2');
  };

  return (
    <div className='flex h-screen'>
      <div
        className='hidden md:flex w-3/4 bg-cover '
        style={{ backgroundImage: `url('/assets/images/reglog.png')` }}
      ></div>

      <div className='flex justify-center items-center w-full md:w-1/2 bg-white p-8'>
        <div className='w-full max-w-md text-center'>
          <h2 className='text-3xl font-bold mb-9 text-black '>
            Periksa email Anda untuk tautan verifikasi.
          </h2>

          <p className='text-gray-600 mb-9'>
            Silakan masukkan kode yang kami kirim ke{' '}
            <span className='text-blue-600 font-extrabold '>
              Armanmaul@gmail.com
            </span>
          </p>

          <div className='flex justify-center space-x-4 mb-8'>
            <input
              type='text'
              className='w-12 h-12 text-black text-center p-2 border border-gray-300 rounded-lg'
              maxLength='1'
            />
            <input
              type='text'
              className='w-12 h-12 text-black text-center p-2 border border-gray-300 rounded-lg'
              maxLength='1'
            />
            <input
              type='text'
              className='w-12 h-12 text-black text-center p-2 border border-gray-300 rounded-lg'
              maxLength='1'
            />
            <input
              type='text'
              className='w-12 h-12 text-black text-center p-2 border border-gray-300 rounded-lg'
              maxLength='1'
            />
          </div>

          <button
            className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700'
            // onClick={handleNextStep}
          >
            Lanjutkan
          </button>

          <p className='text-center mt-4 text-gray-400'>
            Tidak Menerima Kode?{' '}
            <span className='text-blue-600 cursor-pointer'>{buttonText}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
