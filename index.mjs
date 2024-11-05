// import serverless from 'serverless-http';
// import dotenv from 'dotenv';
// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';

// // // Route imports
// import postsRoutes from './routes/posts-routes.js';
// import userRoutes from './routes/user-routes.js';

// const app = express();

// dotenv.config({
//   path: '.env',
// });
// app.use(cors());
// app.use(bodyParser.json({ limit: '30mb' }));
// app.use(
//   bodyParser.urlencoded({ limit: '30mb', extended: true })
// );


// // // Route handlers
// app.use('/posts', postsRoutes);
// app.use('/users', userRoutes);
// app.get('/hello', function (req, res) {
//   res.status(200).json({ message: 'Hello, World!' });
// });

// // // const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.DB_URL)
//   .then(() =>
//     // app.listen(PORT, () => {
//     //   console.log(`Server running on port ${PORT}`);
//     // })
//     console.log('Server running')
//   )
//   .catch(err => {
//     console.log(err);
//   });

// export const handler = serverless(app);

// // export const handler = async event => {
// //   // TODO implement
// //   const response = {
// //     statusCode: 200,
// //     body: JSON.stringify('Hello from Lambda!'),
// //   };
// //   return response;
// // };


import express from 'express';
import serverless from 'serverless-http';

// Initialize Express app
const app = express();

// Middleware (optional, add more if needed)
app.use(express.json());

// Example route
app.get('/memories', (req, res) => {
  res.json({ message: 'Welcome to the memories route!' });
});

// Additional Routes
// If you have a folder for routes, you can import and use them here
// import memoriesRoutes from './routes/memories.js';
// app.use('/memories', memoriesRoutes);

// Catch-all Route for Debugging
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Export the app handler for serverless
export const handler = serverless(app);
