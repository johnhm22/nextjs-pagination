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
    //   .map((user) => ({ ...user, _id: user._id.toString() }))
    //   .toArray();

    for await (const mov of result) {
      moviesArray.push(mov);
    }

    const countOfMovies = await movies.count();
    console.log('countOfMovies: ', countOfMovies);

    // console.log(moviesArray);
    return moviesArray;
  } catch (error) {
    return { error: 'failed to fetch movies' };
  }
};

//database name
// const dbName = 'sample_mflix';

// export const run = async () => {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db('admin').command({ ping: 1 });
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!'
//     );
//     let moviesArray = [];
//     const db = client.db(dbName);
//     const collection = db.collection('movies').find().limit(10);

//     for await (const mov of collection) {
//       moviesArray.push(mov);
//     }
//     console.log(moviesArray);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// };

// run().catch(console.dir);
