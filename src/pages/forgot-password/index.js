import { useRouter } from 'next/router';

export default function ForgotPassword() {
  const router = useRouter();

  const handleNextStep = () => {
    router.push('/forgot-password/verification-code');
  };

  return (
    <div className='flex h-screen'>
      <div
        className='hidden md:flex w-3/4 bg-cover'
        style={{ backgroundImage: `url('/assets/images/reglog.png')` }}
      ></div>

      <div className='flex justify-center items-center w-full md:w-1/2 bg-white p-8'>
        <div className='w-full max-w-md'>
          <div className='text-center mb-7'>
            <h2 className='text-2xl font-bold text-black'>
              Konfirmasi ini Anda.
            </h2>
            <p className='text-gray-600 mt-2'>
              Harap verifikasi email Anda untuk melanjutkan
            </p>
          </div>

          <label className='block mb-2 text-gray-700' htmlFor='email'>
            Email
          </label>
          <input
            id='email'
            type='email'
            placeholder='Masukkan email anda'
            className='mb-4 w-full p-3 border border-gray-300 rounded-lg'
          />

          <button
            className='w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700'
            onClick={handleNextStep}
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}
