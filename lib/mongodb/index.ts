declare global {
  var mongoClientPromise: Promise<MongoClient>; // This must be a `var` and not a `let / const`
}

import { MongoClient, ServerApiVersion } from 'mongodb';

const URI = process.env.MONGODB_URI!;
const options = {};

if (!URI) {
  throw new Error('The MongoDB URI cannot be found in .env.local');
}

const client = new MongoClient(URI, options);

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV !== 'production') {
  if (!global.mongoClientPromise) {
    global.mongoClientPromise = client.connect();
  }
  clientPromise = global.mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;

// ****************

// const main = async () => {
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('movies');

//   return 'done';
// };
// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// export default client;
