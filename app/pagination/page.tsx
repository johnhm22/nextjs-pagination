import React from 'react';

import Pagination from '@/app/components/Pagination';

const Page = () => {
  return (
    // <main className='flex flex-1 w-full min-h-screen mt-52'>
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300'>
      <div>
        <Pagination />
      </div>
    </main>
  );
};

export default Page;
