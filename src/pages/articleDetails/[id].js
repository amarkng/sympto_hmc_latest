import { useRouter } from 'next/router';
import Navbar from '../../app/components/Navbar';
import Footer from '../../app/components/Footer';
import dummyArticleDetails from '../../app/dummyData/dummyArticleDetails';
import Image from 'next/image';

export default function ArticleDetail() {
  const router = useRouter();
  const { id } = router.query;

  const article = dummyArticleDetails.find(
    (article) => article.id === parseInt(id)
  );

  if (!article) {
    return (
      <div className='min-h-screen flex justify-center items-center'>
        <h1 className='text-3xl font-bold'>Artikel tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div className='bg-white min-h-screen'>
      <Navbar />

      <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 md:px-8 lg:px-12'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4'>
          {article.title}
        </h1>
        <div className='flex items-center space-x-4 mb-6'>
          <span className='bg-blue-500 text-white text-xs md:text-sm lg:text-md px-3 py-1 rounded-full'>
            {article.category}
          </span>
          <span className='text-gray-500 text-xs md:text-sm'>
            {article.date}
          </span>
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
        <div className='text-gray-700 text-base md:text-lg leading-relaxed text-justify'>
          <p className='mb-6'>{article.content}</p>
          <p className='mb-6'>{article.content}</p>
          <p className='mb-6'>{article.content}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
