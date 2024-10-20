import { Poppins } from 'next/font/google';
import '../app/globals.css';

const poppins = Poppins({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Symptosense',
  description: 'Prediksi kondisi kesehatanmu sebelum masalah datang!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={poppins.className}>
      <body className={'antialiased'}>{children}</body>
    </html>
  );
}
