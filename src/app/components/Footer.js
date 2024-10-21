import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdOutlineLocationOn, MdCall } from 'react-icons/md';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-[#1D2B44] text-white py-10'>
      <div className='container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-8'>
        <div className='space-y-4'>
          <h3 className='text-2xl sm:text-3xl font-extralight'>Symptosense</h3>
          <p className='text-sm sm:text-base text-gray-300'>
            Dengan teknologi AI canggih, ketahui kondisi kesehatanmu lebih awal.
            Bergabunglah dengan SymptoSense dan jaga kesehatanmu dengan lebih
            proaktif.
          </p>
          <div className='flex space-x-8'>
            <a
              href='#'
              className='p-3 rounded-md border-2 border-white text-white hover:text-red-600 hover:bg-white transition'
            >
              <FaYoutube size={20} />
            </a>
            <a
              href='#'
              className='p-3 rounded-md border-2 border-white text-white hover:text-blue-500 hover:bg-white transition'
            >
              <FaTwitter size={20} />
            </a>
            <a
              href='https://www.instagram.com/humicengineering/'
              target='_blank'
              className='p-3 rounded-md border-2 border-white text-white hover:text-pink-500 hover:bg-white transition'
            >
              <FaInstagram size={20} />
            </a>
            <a
              href='#'
              className='p-3 rounded-md border-2 border-white text-white hover:text-blue-600 hover:bg-white transition'
            >
              <FaFacebookF size={20} />
            </a>
          </div>
        </div>

        <div className='space-y-4 lg:ml-24'>
          <h3 className='text-xl sm:text-2xl font-extralight'>Quick Links</h3>
          <ul className='space-y-2 text-sm sm:text-base text-gray-300'>
            <li>
              <Link href='/#about' className='hover:text-gray-100 transition'>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href='/articleFull'
                className='hover:text-gray-100 transition'
              >
                Artikel
              </Link>
            </li>
            <li>
              <Link href='/#obat' className='hover:text-gray-100 transition'>
                Obat & Vitamin
              </Link>
            </li>
            <li>
              <Link
                href='/Diagnosis'
                className='hover:text-gray-100 transition'
              >
                Diagnosis
              </Link>
            </li>
          </ul>
        </div>

        <div className='space-y-5 lg:ml-8'>
          <h3 className='text-xl sm:text-2xl font-extralight'>Contact Us</h3>
          <ul className='space-y-2 text-sm sm:text-base text-gray-300'>
            <li className='flex items-center space-x-2'>
              <MdEmail />
              <span>Symptosense@gmail.com</span>
            </li>
            <li className='flex items-start space-x-2'>
              <MdOutlineLocationOn />
              <span>Jl. Telekomunikasi, Bandung, Indonesia</span>
            </li>
            <li className='flex items-center space-x-2'>
              <MdCall />
              <span>+62 82123456789</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
