import { useRouter } from 'next/router';

export default function VerificationCode() {
  const router = useRouter();

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
          <h2 className='text-3xl font-bold mb-4 text-black'>
            Periksa email Anda untuk tautan verifikasi.
          </h2>

          <p className='text-gray-600 mb-4'>
            Silakan masukkan kode yang kami kirim ke{' '}
            <span className='text-blue-600'>Armanmaul@gmail.com</span>
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

          <p className='text-center mt-4 text-gray-600'>
            Tidak Menerima Kode?{' '}
            <span className='text-blue-600 cursor-pointer'>Kirim Lagi</span>
          </p>

          <p className='text-center text-blue-600 mt-1'>01:00</p>
        </div>
      </div>
    </div>
  );
}
