'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';

type Props = {
  fetchMovies: () => {};
};

const Pagination = ({ fetchMovies }: Props) => {
  const {
    ref: myRef,
    inView,
    entry,
  } = useInView({
    /* Optional options */
    threshold: 0,
  });

  console.log('Pagination component, inView status: ', inView);

  //   if (inView) {
  //     fetchMovies();
  //   }

  return (
    <div ref={myRef}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
    </div>
  );
};

export default Pagination;
