import { getMovies } from '@/lib/mongodb/movies';
import Movies from './components/Movies';
import Link from 'next/link';
// import { run } from '@/lib/mongodb/movies';

const Page = async () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300'>
      <div>
        <div className='flex flex-row mb-5 justify-between'>
          <div className=''>
            <Link
              href={'/movies'}
              className='mr-4 rounded-md bg-slate-100 px-2'
            >
              Movies
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
