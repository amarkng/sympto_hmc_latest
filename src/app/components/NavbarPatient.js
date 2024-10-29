import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FiClipboard } from 'react-icons/fi';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { HiOutlineLogout } from 'react-icons/hi';
import { PiChatsLight } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
} from './alert-dialog';

export default function NavbarPatient({ toggleSidebar, isSidebarOpen }) {
  const router = useRouter();
  const isActive = (path) => router.pathname === path;
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleLogout = () => {
    setDialogOpen(false);
    router.push('/');
  };

  const navigateToSettings = () => {
    router.push('/patient-setting');
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out bg-white w-64 p-4 shadow-lg flex flex-col z-50`}
      style={{ maxHeight: '200vh', overflowY: 'auto' }}
    >
      <div className='flex items-center justify-between w-full mb-8'>
        <h1 className='text-2xl font-bold text-blue-600 text-center w-full'>
          SymptoSense
        </h1>
        <button className='md:hidden text-gray-700' onClick={toggleSidebar}>
          ✖️
        </button>
      </div>

      <div className='flex justify-between items-center bg-white p-4 rounded-lg mb-8'>
        <div className='flex items-center'>
          <Image
            src='/assets/images/logoPasien.png'
            alt='Patient Profile'
            className='w-16 h-16 rounded-full mr-4'
            width={64}
            height={64}
          />
          <div>
            <p className='text-gray-600 text-sm'>Halo Pasien,</p>
            <p className='font-bold text-md text-black'>Lala Aisyah</p>
          </div>
        </div>

        {/* <div className='relative'>
          <FaBell className='text-xl text-gray-700' />
          <span className='absolute top-0 right-0 block h-2 w-2 rounded-full bg-orange-500'></span>
        </div> */}
      </div>

      <nav className='flex flex-col space-y-2 flex-1'>
        <MenuLink
          Icon={RxDashboard}
          label='Beranda'
          href='/patient-dashboard'
          isActive={isActive('/patient-dashboard')}
        />
        <MenuLink
          Icon={FiClipboard}
          label='Diagnosis'
          href='/DiagnosisP'
          isActive={isActive('/DiagnosisP')}
        />
        <MenuLink
          Icon={PiChatsLight}
          label='Konsultasi'
          href='/KonsultasiPasien'
          isActive={isActive('/KonsultasiPasien')}
        />
      </nav>

      <div className='mt-auto space-y-4'>
        <div
          onClick={navigateToSettings}
          className={`flex items-center p-4 hover:bg-gray-100 rounded-md text-gray-800 cursor-pointer ${
            isActive('/patient-setting')
              ? 'shadow-lg bg-gray-100'
              : 'text-gray-navbar'
          }`}
        >
          <HiOutlineCog6Tooth
            className={`text-lg ${
              isActive('/patient-setting') ? 'text-blue-500' : 'text-gray-700'
            }`}
          />
          <span className='ml-2'>Pengaturan</span>
        </div>
        <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
          <AlertDialogTrigger asChild>
            <button
              onClick={() => setDialogOpen(true)}
              className='flex items-center text-red-600 w-full hover:bg-gray-100 p-4 rounded-md'
            >
              <HiOutlineLogout className='mr-2 rotate-180 text-lg' /> Logout
            </button>
          </AlertDialogTrigger>
          <AlertDialogContent className='max-w-md p-12 bg-white rounded-xl shadow-lg border border-gray-200'>
            <h2 className='text-xl font-bold mb-2 text-center text-black'>
              Logout
            </h2>
            <p className='text-gray-600 text-center mb-6'>
              Anda akan keluar dari akun Anda.
              <br /> Apakah Anda ingin melanjutkan?
            </p>
            <div className='flex flex-col space-y-3'>
              <AlertDialogCancel asChild>
                <button className='w-full py-6 rounded-full bg-gray-300 hover:bg-gray-400 text-black font-semibold text-center'>
                  No
                </button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <button
                  onClick={handleLogout}
                  className='w-full py-6 rounded-full bg-merah-yes hover:bg-red-700 text-white font-semibold text-center'
                >
                  Yes
                </button>
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </aside>
  );
}

function MenuLink({ Icon, label, href, isActive }) {
  const router = useRouter();

  return (
    <a
      onClick={() => router.push(href)}
      className={`flex items-center p-4 hover:bg-gray-100 rounded-md  cursor-pointer ${
        isActive ? 'shadow-lg bg-gray-100 text-black' : 'text-gray-navbar'
      }`}
    >
      <Icon
        className={`text-lg ${isActive ? 'text-blue-500' : 'text-gray-600'}`}
      />
      <span className='ml-4'>{label}</span>
    </a>
  );
}
