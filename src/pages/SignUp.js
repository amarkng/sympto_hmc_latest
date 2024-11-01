import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

export default function SignUp() {
  const [role, setRole] = useState('');
  const [, setSelectedFile] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!role) {
      alert('Pilih role terlebih dahulu.');
      return;
    }

    if (role === 'doctor') {
      router.push({
        pathname: '/SignIn',
        query: { role: 'doctor' },
      });
    } else if (role === 'patient') {
      router.push({
        pathname: '/SignIn',
        query: { role: 'patient' },
      });
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className='flex h-screen'>
      <div
        className='hidden md:flex w-3/4 bg-cover'
        style={{
          backgroundImage: `url('/assets/images/reglog.png')`,
        }}
      ></div>

      <div className='flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-6'>
        <div className='w-full max-w-md'>
          <h2 className='text-2xl font-bold text-center text-gray-800'>
            Bergabunglah dengan <br />
            <span className='text-blue-600'>SymptoSense!</span>
          </h2>
          <p className='mt-2 text-center text-gray-600'>
            Daftarkan dirimu dan mulai pantau kesehatanmu dengan bantuan AI.
            Lebih sehat, lebih terkendali.
          </p>

          <form className='mt-8' onSubmit={handleSignUp}>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Nama
              </label>
              <input
                type='text'
                placeholder='Masukan nama anda'
                className='mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black' // Text hitam
              />
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                placeholder='Masukan email anda'
                className='mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black' // Text hitam
              />
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder='Masukan kata sandi anda'
                  className='mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black' // Text hitam
                />
                <button
                  type='button'
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className='absolute inset-y-0 right-0 pr-4 flex items-center text-xl text-gray-500'
                >
                  {passwordVisible ? (
                    <MdOutlineRemoveRedEye />
                  ) : (
                    <MdOutlineRemoveRedEye />
                  )}
                </button>
              </div>
            </div>

            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className='mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black' // Text hitam
              >
                <option value=''>Pilih Role</option>
                <option value='doctor'>Dokter</option>
                <option value='patient'>Pasien</option>
              </select>
            </div>

            {role === 'doctor' && (
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Upload STR (Surat Tanda Registrasi)
                </label>
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                  required
                  className='mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700'
                />
              </div>
            )}

            {role === 'patient' && (
              <div className='mb-4'>
                <label className='block text-sm font-medium text-gray-700'>
                  Upload KTP
                </label>
                <input
                  type='file'
                  accept='image/*'
                  onChange={handleFileChange}
                  required
                  className='mt-1 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700'
                />
              </div>
            )}

            <button className='w-full bg-blue-600 text-white p-2 rounded-lg font-semibold hover:bg-blue-700 transition'>
              Daftar
            </button>
          </form>

          <p className='mt-6 text-center text-gray-500'>
            Apakah Sudah Ada Akun?{' '}
            <Link href='/SignIn' className='text-blue-600'>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
