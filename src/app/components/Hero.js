import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative flex flex-col items-center justify-center text-center min-h-screen bg-white'
      style={{
        backgroundImage: "url('/assets/images/circularHero.png')",
        backgroundSize: '150% 95%',
        backgroundPosition: 'bottom center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      <h1 className='text-blue-600 text-4xl sm:text-5xl lg:text-7xl font-extrabold relative mb-4 z-10'>
        Symptosense
      </h1>
      <h2 className='text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mt-2 relative z-10'>
        Solusi AI untuk Memprediksi <br />
        Kesehatanmu!
      </h2>
      <p className='mt-6 text-sm sm:text-base md:text-lg text-gray-600 relative z-10'>
        Dengan teknologi AI canggih, ketahui kondisi kesehatanmu lebih awal.{' '}
        <br />
        Bergabunglah dengan SymptoSense dan jaga kesehatanmu dengan lebih
        proaktif.
      </p>
      <button className='mt-8 bg-blue-600 text-white py-5 px-8 rounded-full text-sm sm:text-lg relative z-10 flex items-center'>
        <Link href='SignIn' className='flex items-center'>
          Mulai <span className='ml-2'>→</span>
        </Link>
      </button>
    </section>
  );
}
