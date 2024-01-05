'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='w-full z-10 bg-black fixed'>
      <nav className='max-w-[1440px] mx-2 md:mx-4 flex justify-between items-center md:px-5 sm:px-16 h-14'>
        <div className='flex flex-row justify-start gap-3 font-semibold text-base'>
          <>
            <Link
              href='/'
              className='flex text-white font-semibold text-xs md:text-sm px-4 py-1'
            >
              Home
            </Link>

            <Link
              href='/movies'
              className='flex text-white font-semibold px-4 py-1 text-xs md:text-sm'
            >
              Movies
            </Link>
            <Link
              href='/pagination'
              className='flex text-white font-semibold px-4 py-1 text-xs md:text-sm'
            >
              Pagination test
            </Link>
          </>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
