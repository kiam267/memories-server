// Load environment variables
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const postsRoutes = require('./routes/posts-routes');
const userRoutes = require('./routes/user-routes');

// App initialization
const app = express();

// Middleware
app.use(cors()); 
app.use(bodyParser.json({ limit: '30mb' }));
app.use(
  bodyParser.urlencoded({ limit: '30mb', extended: true })
);

// Routes
app.use('/posts', postsRoutes);
app.use('/users', userRoutes);

// Test Routes
app.get('/memorice', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

// MongoDB connection and server start
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('✅ Database connected successfully');
    app.listen(5000, () => {
      console.log(
        '🚀 Server running on http://localhost:5000'
      );
    });
  })
  .catch(err =>
    console.error('❌ Database connection error:', err)
  );
