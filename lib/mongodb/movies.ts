import clientPromise from '.';

// import client from '.';

let client;
let db;
let movies;

// database name
const dbName = 'sample_mflix';

const init = async () => {
  console.log('init function called');
  if (db) return;
  try {
    client = await clientPromise;
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log('Connected successfully to server');
    db = await client.db(dbName);
    movies = await db.collection('movies');
  } catch (error) {
    throw new Error('Failed to establish connection to database');
  }
};

(async () => {
  await init();
})();

export const getMovies = async (skip: number, limit: number) => {
  try {
    let moviesArray = [];
    if (!movies) await init();
    const result = await movies.find().limit(limit).skip(skip);

    for await (const mov of result) {
      moviesArray.push(mov);
    }

    const countOfMovies = await movies.count();
    console.log('countOfMovies: ', countOfMovies);

    return moviesArray;
  } catch (error) {
    return { error: 'failed to fetch movies' };
  }
};
