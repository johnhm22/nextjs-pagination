import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pagination in NextJS v14',
  description:
    'A simple exercise to practise the implementaiton of pagination in NextJS using server side components',
  authors: [{ name: 'John Morgan' }],
  openGraph: {
    type: 'website',
    // url: 'https://finance-app-puce.vercel.app/',
    title: 'Pagination in NextJS with server side components',
    description:
      'A simple exercise to practise the implementaiton of pagination in NextJS using server side components',
    // images: [
    //   {
    //     url: 'https://res.cloudinary.com/dbu5rpxkg/image/upload/v1698662802/finance_ngrwxn.png',
    //     width: '1200',
    //     height: '630',
    //   },
    // ],
  },
  keywords: 'nextjs, pagination, tailwind, mongodb',
  // publisher: 'Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
