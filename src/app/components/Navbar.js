import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path || pathname.includes(path);

  return (
    <nav className='bg-white py-4'>
      <div className='container mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between'>
        <Link href='/' className='text-xl sm:text-2xl font-bold  text-blue-600'>
          Symptosense
        </Link>

        <div className='hidden lg:flex space-x-4 sm:space-x-6 lg:space-x-8'>
          <Link
            href='/#about'
            className={`text-gray-800 hover:text-blue-600 transition ${
              isActive('/#about') ? 'border-b-2 border-black' : ''
            }`}
          >
            Tentang Kami
          </Link>
          <Link
            href='/articleFull'
            className={`text-gray-800 hover:text-blue-600 transition ${
              isActive('/articleFull') ? 'border-b-2 border-black' : ''
            }`}
          >
            Artikel
          </Link>
          <Link
            href='/#obat'
            className={`text-gray-800 hover:text-blue-600 transition ${
              isActive('/#obat') ? 'border-b-2 border-black' : ''
            }`}
          >
            Obat & Vitamin
          </Link>
          <Link
            href='/Diagnosis'
            className={`text-gray-800 hover:text-blue-600 transition ${
              isActive('/Diagnosis') ? 'border-b-2 border-black' : ''
            }`}
          >
            Diagnosis
          </Link>
        </div>

        <div className='hidden lg:flex space-x-3 sm:space-x-4 items-center'>
          <Link href='/SignUp'>
            <button className='min-w-[100px] sm:min-w-[120px] px-3 py-2 sm:px-4 sm:py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition'>
              Registrasi
            </button>
          </Link>

          <Link href='/SignIn'>
            <button className='min-w-[100px] sm:min-w-[120px] px-3 py-2 sm:px-4 sm:py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition'>
              Masuk
            </button>
          </Link>
        </div>

        {/* Mobile */}
        <div className='lg:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-800 focus:outline-none'
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='lg:hidden bg-white px-6 py-4'>
          <Link
            href='/#about'
            className={`block text-gray-800 py-2 hover:text-blue-600 transition ${
              isActive('/#about') ? 'border-b-2 border-black' : ''
            }`}
          >
            Tentang Kami
          </Link>
          <Link
            href='/articleFull'
            className={`inline-block text-gray-800 py-2 hover:text-blue-600 transition ${
              isActive('/articleFull') ? 'border-b-2 border-black' : ''
            }`}
          >
            Artikel
          </Link>
          <Link
            href='/#obat'
            className={`block text-gray-800 py-2 hover:text-blue-600 transition ${
              isActive('/#obat') ? 'border-b-2 border-black' : ''
            }`}
          >
            Obat & Vitamin
          </Link>
          <Link
            href='/Diagnosis'
            className={`inline-block text-gray-800 py-2 hover:text-blue-600 transition ${
              isActive('/Diagnosis') ? 'border-b-2 border-black' : ''
            }`}
          >
            Diagnosis
          </Link>

          <Link href='/SignUp'>
            <button className='w-full mt-4 px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-600 hover:text-white transition'>
              Registrasi
            </button>
          </Link>

          <Link href='/SignIn'>
            <button className='w-full mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition'>
              Masuk
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
