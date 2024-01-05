// 'use client';

import Movies from '../components/Movies';
import { fetchMovies } from './actions';

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // const page = typeof searchParams.page === 'string' ? +searchParams.page : 1;
  // const limit =
  //   typeof searchParams.limit === 'string' ? +searchParams.limit : 10;

  // const search =
  //   typeof searchParams.search === 'string' ? searchParams.search : null;

  const initialMovies = await fetchMovies();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300'>
      <div>
        <div className='flex flex-row mb-5 justify-between'>
          <h2 className='font-bold text-xl'>Movies</h2>
        </div>
        <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full min-h-full lg:mb-0 lg:text-left'>
          <Movies initialMovies={initialMovies} />
        </div>
      </div>
    </main>
  );
};

export default Page;
