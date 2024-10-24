import { useState, useEffect } from 'react';
import Navbar from '../app/components/Navbar';
import Footer from '../app/components/Footer';
import dummyArticlesData from '../app/dummyData/dummyArticlesData';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticleFull() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(12);
  const totalPages = Math.ceil(dummyArticlesData.length / articlesPerPage);

  useEffect(() => {
    const updateArticlesPerPage = () => {
      if (window.innerWidth < 640) {
        setArticlesPerPage(6);
      } else {
        setArticlesPerPage(12);
      }
    };
    updateArticlesPerPage();

    window.addEventListener('resize', updateArticlesPerPage);

    return () => window.removeEventListener('resize', updateArticlesPerPage);
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

  const currentArticles = dummyArticlesData.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const goToFirstPage = () => setCurrentPage(1);
  const goToLastPage = () => setCurrentPage(totalPages);
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <div className='max-w-7xl mx-auto py-16 px-4'>
        <h1 className='lg:text-6xl md:text-4xl text-2xl font-bold text-black text-center mb-8'>
          Artikel
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {currentArticles.map((article) => (
            <Link href={`/articleDetails/${article.id}`} key={article.id}>
              <div className='bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md cursor-pointer'>
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  className='object-cover rounded-t-lg'
                  width={1024}
                  height={576}
                  layout='responsive'
                />
                <div className='p-6'>
                  <h3 className='text-lg font-semibold text-gray-900'>
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
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className='flex justify-center mt-10'>
          <ul className='flex space-x-2'>
            <li>
              <button
                onClick={goToFirstPage}
                disabled={currentPage === 1}
                className='py-2 px-3 border rounded-md bg-white text-gray-700 hover:bg-gray-200'
              >
                «
              </button>
            </li>
            <li>
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className='py-2 px-3 border rounded-md bg-white text-gray-700 hover:bg-gray-200'
              >
                ‹
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => {
              if (
                index + 1 === currentPage ||
                (index + 1 <= 3 && currentPage === 1) ||
                (index + 1 === totalPages && currentPage === totalPages) ||
                (index + 1 >= currentPage - 1 && index + 1 <= currentPage + 1)
              ) {
                return (
                  <li key={index}>
                    <button
                      onClick={() => paginate(index + 1)}
                      className={`py-2 px-3 border rounded-md ${
                        currentPage === index + 1
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-gray-700'
                      } hover:bg-blue-500 hover:text-white transition`}
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              }
              if (
                index + 1 === currentPage - 2 ||
                index + 1 === currentPage + 2
              ) {
                return <li key={index}>...</li>;
              }
              return null;
            })}
            <li>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className='py-2 px-3 border rounded-md bg-white text-gray-700 hover:bg-gray-200'
              >
                ›
              </button>
            </li>
            <li>
              <button
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
                className='py-2 px-3 border rounded-md bg-white text-gray-700 hover:bg-gray-200'
              >
                »
              </button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
