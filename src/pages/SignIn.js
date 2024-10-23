import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

export default function SignIn() {
  const [role, setRole] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === 'doctor') {
      router.push({
        pathname: '/doctor-dashboard',
        query: { role: 'doctor' },
      });
    } else if (role === 'patient') {
      router.push({
        pathname: '/patient-dashboard',
        query: { role: 'patient' },
      });
    } else {
      alert('Please select a role before logging in.');
    }
  };

  return (
    <div className='flex h-screen'>
      <div
        className='hidden md:flex w-3/4 bg-cover'
        style={{
          backgroundImage: `url('/assets/images/reglog.png')`,
        }}
      ></div>

      <div className='flex flex-col justify-center items-center w-full md:w-1/2 bg-white p-8'>
        <div className='w-full max-w-md'>
          <h2 className='text-2xl font-bold text-center text-gray-800'>
            Selamat Datang di
            <br />
            <span className='text-blue-600'>SymptoSense!</span>
          </h2>
          <p className='mt-2 text-center text-gray-600'>
            Masuk untuk melanjutkan perjalanan kesehatanmu bersama AI kami.
          </p>

          <form className='mt-8' onSubmit={handleLogin}>
            <div className='mb-4'>
              <label className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                placeholder='Enter your email'
                className='mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black'
              />
            </div>

            <div className='mb-4'>
              <div className='flex justify-between items-center'>
                <label className='block text-sm font-medium text-gray-700'>
                  Password
                </label>

                <Link href='/forgot-password' className='text-blue-600 text-sm'>
                  Lupa?
                </Link>
              </div>
              <div className='relative'>
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder='Enter your password'
                  className='mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black'
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
                className='mt-1 w-full p-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black'
              >
                <option value=''>Choose a role</option>
                <option value='doctor'>Doctor</option>
                <option value='patient'>Patient</option>
              </select>
            </div>

            <button className='w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition'>
              Masuk
            </button>
          </form>

          <p className='mt-6 text-center text-gray-600'>
            Want to create an account?{' '}
            <Link href='/SignUp' className='text-blue-600'>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
