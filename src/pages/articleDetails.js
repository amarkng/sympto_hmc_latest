import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import Image from 'next/image';
import dummyArticleDetails from '../app/dummyData/dummyArticleDetails';

export default function ArticleDetails() {
  const article = dummyArticleDetails[0];

  return (
    <div className='bg-white min-h-screen'>
      <Navbar />

      <div className='max-w-7xl mx-auto py-10 px-4'>
        <h1 className='text-4xl font-bold text-black mb-4 text-center'>
          {article.title}
        </h1>

        <div className='flex justify-center items-center space-x-4 mb-8'>
          <span className='bg-blue-500 text-white text-xs px-3 py-1 rounded-full'>
            {article.category}
          </span>
          <span className='text-gray-500'>{article.date}</span>
        </div>

        <div className='mb-8'>
          <Image
            src={article.imageUrl}
            alt={article.title}
            className='object-cover rounded-lg'
            width={1024}
            height={576}
            layout='responsive'
          />
        </div>

        <div className='text-gray-700 leading-relaxed'>
          <p className='mb-6'>{article.content}</p>
          <p className='mb-6'>{article.content}</p>
          <p className='mb-6'>{article.content}</p>
          <p>{article.content}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
