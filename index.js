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

dotenv.config({
  path: '.env',
});

app.use(bodyParser.json({ limit: '30mb' }));
app.use(
  bodyParser.urlencoded({ limit: '30mb', extended: true })
);
app.use(cors());

// Route handlers
app.use('/posts', postsRoutes);
app.use('/users', userRoutes);
app.get('/', function (req, res) {
  req.json({
    message: 'API is running',
  });
});

// const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_URL)
  .then(() =>
    // app.listen(PORT, () => {
    //   console.log(`Server running on port ${PORT}`);
    // })
    console.log('Server running')
  )
  .catch(err => {
    console.log(err);
  });

module.exports.handler = serverless(app);
