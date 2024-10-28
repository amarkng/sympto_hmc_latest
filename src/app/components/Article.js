import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Article() {
  const articles = [
    {
      id: 1,
      title: 'The Golden Sands Of Florida And California',
      description:
        'Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec purus viverra. Sit justo velit, eu sed.',
      category: 'Health',
      date: '20 Maret 2024',
      imageUrl: '/assets/images/articlePlaceholder1.png',
    },
    {
      id: 2,
      title: 'The Golden Sands Of Florida And California',
      description:
        'Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec purus viverra. Sit justo velit, eu sed.',
      category: 'Health',
      date: '15 Februari 2024',
      imageUrl: '/assets/images/articlePlaceholder1.png',
    },
    {
      id: 3,
      title: 'The Golden Sands Of Florida And California',
      description:
        'Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec purus viverra. Sit justo velit, eu sed.',
      category: 'Health',
      date: '10 Januari 2024',
      imageUrl: '/assets/images/articlePlaceholder1.png',
    },
    {
      id: 4,
      title: 'The Golden Sands Of Florida And California',
      description:
        'Lorem ipsum dolor sit amet, con turadip iscingelit. In sed et donec purus viverra. Sit justo velit, eu sed.',
      category: 'Health',
      date: '10 Januari 2024',
      imageUrl: '/assets/images/articlePlaceholder1.png',
    },
  ];
  const [visibleArticles, setVisibleArticles] = useState(3);

  useEffect(() => {
    const updateVisibleArticles = () => {
      if (window.innerWidth >= 1024) {
        setVisibleArticles(3);
      } else if (window.innerWidth >= 768) {
        setVisibleArticles(4);
      } else {
        setVisibleArticles(3);
      }
    };

    updateVisibleArticles();

    window.addEventListener('resize', updateVisibleArticles);

    return () => window.removeEventListener('resize', updateVisibleArticles);
  }, []);

  return (
    <section className='relative bg-article-blue py-16 lg:py-32 px-6 overflow-hidden'>
      <div className='absolute bottom-[-150px] left-[0%] transform -translate-x-1/2 w-[720px] h-[720px] bg-blue-900 rounded-full opacity-50'></div>
      <div className='absolute top-[-300px] right-[-300px] w-[720px] h-[720px] bg-blue-800 rounded-full opacity-50'></div>

      <div className='max-w-7xl  lg:mx-auto relative z-10'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 text-center'>
          Artikel Terbaru
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
          {articles.slice(0, visibleArticles).map((article) => (
            <div
              key={article.id}
              className='bg-white rounded-xl   shadow-lg overflow-hidden hover:shadow-xl transition-shadow '
            >
              <div className='w-full' style={{ aspectRatio: '16/9' }}>
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  className='object-cover w-full h-full'
                  width={1024}
                  height={576}
                  layout='responsive'
                />
              </div>
              <div className='p-4 sm:p-8'>
                <h3 className='text-base sm:text-lg md:text-xl font-semibold text-gray-900'>
                  {article.title}
                </h3>

                <p className='text-sm sm:text-base text-gray-400 mt-2'>
                  {article.description}
                </p>
                <div className='flex items-center mt-4'>
                  <span className='bg-blue-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full'>
                    {article.category}
                  </span>
                  <span className='text-xs sm:text-sm text-black ml-5'>
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
