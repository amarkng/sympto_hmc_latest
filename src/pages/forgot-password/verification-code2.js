import { useRouter } from 'next/router';

export default function VerificationCode2() {
  return (
    <div className='flex h-screen'>
      <div
        className='hidden md:flex w-2/3 bg-cover bg-center'
        style={{ backgroundImage: `url('/assets/images/reglog.png')` }}
      ></div>
      <div className='flex justify-center items-center w-full md:w-1/3 bg-white p-8'>
        <div className='w-full max-w-md'>
          <h2 className='text-2xl font-bold mb-4'>
            Periksa email Anda untuk tautan verifikasi.
          </h2>
          <p className='text-gray-600 mb-8'>
            Silakan masukkan kode yang kami kirim ke{' '}
            <span className='text-blue-600'>Armanmaul@gmail.com</span>
          </p>
          <div className='flex justify-between mb-8'></div>
          <button className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700'>
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}
