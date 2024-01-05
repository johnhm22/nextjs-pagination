'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { fetchMovies } from '../movies/actions';

type Movies = {
  _id: string;
  title: string;
  poster: string;
  cast: string[];
  year: number;
};

const Movies = ({ initialMovies }: { initialMovies: Movies[] }) => {
  const {
    ref: myRef,
    inView,
    entry,
  } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState(initialMovies);

  const loadMoreMovies = async () => {
    const nextPage = page + 1;
    const response = await fetchMovies(nextPage);
    if (response) {
      setPage(page + 1);
      setMovies((preVal) => [...preVal, ...response]);
    }
  };

  useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView]);

  return (
    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
      {movies.map((movie) => (
        <div key={movie._id} className=''>
          {movie.poster ? (
            <Image
              className='rounded-md h-3/4'
              src={movie.poster}
              alt='movie poster'
              width={500}
              height={200}
            />
          ) : (
            <p>Sorry no image for this movie</p>
          )}
          <p className='font-bold mt-3'> {movie.title}</p>
          <div className='text-sm font-light text-gray-600'>
            {movie.cast ? movie.cast.toString() : null}
            <p>{movie.year}</p>
          </div>
        </div>
      ))}
      <div ref={myRef}>
        <h2 className='hidden'>{`When inView is true, more movies are loaded. Status is: ${inView}.`}</h2>
      </div>
    </div>
  );
};

export default Movies;
