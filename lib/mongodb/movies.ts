import * as mongoDB from 'mongodb';
import clientPromise from '.';

// import client from '.';

let client;
let db: mongoDB.Db;
let movies: mongoDB.Collection;

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

type Movies = {
  _id: string;
  title: string;
  poster: string;
  cast: string[];
  year: number;
};

export const getMovies = async (
  page: number = 0,
  limit: number = 12
): Promise<Movies[]> => {
  try {
    const skip = page * limit;
    let moviesArray = [];
    if (!movies) await init();
    const result = await movies.find().limit(limit).skip(skip);

    for await (const mov of result) {
      moviesArray.push(mov);
    }

    const countOfMovies = await movies.countDocuments();
    console.log('countOfMovies: ', countOfMovies);

    return JSON.parse(JSON.stringify(moviesArray));

    // return moviesArray;
  } catch (error) {
    return { error: 'failed to fetch movies' };
  }
};
