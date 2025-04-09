import serverless from 'serverless-http';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Route imports
import postsRoutes from './routes/posts-routes.js';
import userRoutes from './routes/user-routes.js';

const app = express();

// Load environment variables from .env file
dotenv.config({ path: '.env' });

// Middleware setup
app.use(cors());
app.use(bodyParser.json({ limit: '30mb' }));
app.use(
  bodyParser.urlencoded({ limit: '30mb', extended: true })
);

// Route handlers
app.use('/posts', postsRoutes);
app.use('/users', userRoutes);
app.get('/memorice', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});
app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() =>
    console.log('Database connected successfully')
  )
  .catch(err =>
    console.error('Database connection error:', err)
  );

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port http://localhost:${process.env.PORT}`
  );
});
