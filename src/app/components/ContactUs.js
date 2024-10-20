import Image from 'next/image';
export default function ContactUs() {
  return (
    <section className='bg-white py-16'>
      <div className='max-w-5xl mx-auto p-4 lg:p-8 flex flex-col lg:flex-row items-center'>
        <div className='flex justify-center lg:w-1/2 mb-8 lg:mb-0'>
          <Image
            src='/assets/images/contact.png'
            alt='Contact Us'
            className='w-48 h-auto sm:w-64 lg:w-full '
            width={1024}
            height={576}
          />
        </div>

        <div className='lg:w-1/2 lg:pl-12'>
          <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left'>
            Kontak Kami
          </h2>
          <form>
            <div className='mb-4'>
              <input
                type='text'
                className='text-black w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base'
                placeholder='Masukkan nama anda'
              />
            </div>
            <div className='mb-4'>
              <input
                type='email'
                className='text-black w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base'
                placeholder='Masukkan email anda'
              />
            </div>
            <div className='mb-4'>
              <textarea
                className='text-black resize-none w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm sm:text-base h-40'
                placeholder='Masukkan pesan yang ingin anda berikan'
              ></textarea>
            </div>
            <div className='text-center lg:text-left'>
              <button
                type='submit'
                className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base'
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
