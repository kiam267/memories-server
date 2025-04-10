// Load environment variables
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// Import core modules
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

// Import routes
import postsRoutes from './routes/posts-routes.js';
import userRoutes from './routes/user-routes.js';

// Create Express app
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json({ limit: '30mb' }));
app.use(
  bodyParser.urlencoded({ limit: '30mb', extended: true })
);

// Routes
app.use('/posts', postsRoutes);
app.use('/users', userRoutes);

// Test routes
app.get('/memorice', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, again!' });
});

// Start server only after DB is connected
const startServer = async () => {
  const PORT = process.env.PORT || 5000;

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('✅ Database connected successfully');

    app.listen(PORT, () => {
      console.log(
        `🚀 Server running at: http://localhost:${PORT}`
      );
    });
  } catch (error) {
    console.error('❌ Database connection error:', error);
    process.exit(1); // Stop app if DB fails
  }
};

startServer();
