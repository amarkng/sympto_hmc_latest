import Image from 'next/image';
import Link from 'next/link';
export default function Article() {
  const articles = [
    {
      id: 1,
      title: 'Healthy Eating: Tips and Tricks For A Balanced Diet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed et donec purus viverra.',
      category: 'Health',
      date: '20 Maret 2024',
      imageUrl: '/assets/images/placeholder1.jpg',
    },
    {
      id: 2,
      title: 'Healthy Eating: Tips and Tricks For A Balanced Diet',
      description: 'lorem euismod dolor nec pretium. Nunc ut tristique massa.',
      category: 'Health',
      date: '15 Februari 2024',
      imageUrl: '/assets/images/placeholder1.jpg',
    },
    {
      id: 3,
      title: 'Healthy Eating: Tips and Tricks For A Balanced Diet',
      description: 'lorem euismod dolor nec pretium. Nunc ut tristique massa.',
      category: 'Health',
      date: '10 Januari 2024',
      imageUrl: '/assets/images/placeholder1.jpg',
    },
    {
      id: 4,
      title: 'The Future of Technology: AI and Beyond',
      description:
        'Maecenas sed diam eget risus varius blandit sit amet non magna.',
      category: 'Technology',
      date: '30 Desember 2023',
      imageUrl: '/assets/images/placeholder1.jpg',
    },
    {
      id: 5,
      title: 'Sustainable Living: How To Go Green',
      description: 'Aenean lacinia bibendum nulla sed consectetur.',
      category: 'Environment',
      date: '5 November 2023',
      imageUrl: '/assets/images/placeholder1.jpg',
    },
    {
      id: 5,
      title: 'Rizzler God',
      description: 'Aenean lacinia bibendum nulla sed consectetur.',
      category: 'Environment',
      date: '5 November 2023',
      imageUrl: '/assets/images/placeholder1.jpg',
    },
  ];

  return (
    <section className='relative bg-blue-500 py-16 px-6 overflow-hidden'>
      <div className='absolute bottom-0 left-[-150px] w-80 h-80 bg-blue-800 rounded-full opacity-44'></div>
      <div className='absolute top-0 right-[-150px] w-80 h-80 bg-blue-800 rounded-full opacity-44'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center'>
          Artikel Terbaru
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8'>
          {articles.slice(0, 4).map((article) => (
            <div
              key={article.id}
              className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
            >
              <Image
                src={article.imageUrl}
                alt={article.title}
                className='object-cover'
                width={1024}
                height={576}
                layout='responsive'
              />
              <div className='p-4 sm:p-6'>
                <h3 className='text-base sm:text-lg md:text-xl font-semibold text-gray-900'>
                  {article.title}
                </h3>

                <p className='text-sm sm:text-base text-gray-700 mt-2'>
                  {article.description}
                </p>
                <div className='flex justify-between items-center mt-4'>
                  <span className='bg-blue-500 text-white text-xs sm:text-sm px-3 py-1 rounded-full'>
                    {article.category}
                  </span>
                  <span className='text-xs sm:text-sm text-gray-500'>
                    {article.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link href='articleFull' className='flex justify-center mt-10'>
          <button className='bg-gray-800 text-white py-3 px-8 rounded-full text-sm sm:text-lg hover:bg-gray-900'>
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
}
