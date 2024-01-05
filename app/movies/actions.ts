'use server';

import { getMovies } from '@/lib/mongodb/movies';

export const fetchMovies = (nextPage: number = 0) => {
  const movies = getMovies(nextPage);
  return movies;
};
