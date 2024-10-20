import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../app/globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const getTitle = () => {
    const { pathname } = router;

    if (pathname === '/SignIn') {
      return 'Sign In';
    } else if (pathname === '/SignUp') {
      return 'Sign Up';
    } else if (pathname === '/doctor-dashboard') {
      return 'Dashboard - Doctor';
    } else if (pathname === '/patient-dashboard') {
      return 'Dashboard - Patient';
    }
    return 'SymptoSense';
  };

  return (
    <main className={poppins.className}>
      <Head>
        <title>{getTitle()}</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
