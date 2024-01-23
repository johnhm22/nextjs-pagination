import { getMovies } from '@/lib/mongodb/movies';
import Movies from '../components/Movies';
import Link from 'next/link';
import clsx from 'clsx';

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = typeof searchParams.page === 'string' ? +searchParams.page : 1;
  const limit =
    typeof searchParams.limit === 'string' ? +searchParams.limit : 10;

  const skip = (page - 1) * limit;

  const movies = await getMovies(skip, limit);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300'>
      <div>
        <div className='flex flex-row mb-5 justify-between'>
          <h2 className='font-bold text-xl'>Movies</h2>
          <div className='font-semibold'>
            <Link
              href={`/movies?page=${page > 1 ? page - 1 : 1}&limit=${limit}`}
              className={clsx(
                'mr-4 rounded-md bg-slate-100 px-2',
                page <= 1 && 'cursor-not-allowed font-light text-gray-400'
              )}
            >
              Previous
            </Link>
            <Link
              href={`/movies?page=${page + 1}&limit=${limit}`}
              className='rounded-md bg-slate-100 px-2'
            >
              Next
            </Link>
          </div>
        </div>
        <div className='mb-32 grid text-center lg:max-w-5xl lg:w-full min-h-full lg:mb-0 lg:text-left'>
          <Movies movies={movies} />
        </div>
      </div>
    </main>
  );
};

export default Page;
