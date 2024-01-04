import React from 'react';
import Image from 'next/image';

const Movies = ({ movies }) => {
  return (
    <div className='grid grid-cols-4 gap-4 w-full'>
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
    </div>
  );
};

export default Movies;
