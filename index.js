import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


// Route imports
import postsRouter from './routes/posts-router.js';

const app = express();



app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());




// Route handlers
app.use('/posts',postsRouter);




const PORT = process.env.PORT || 5000;

mongoose
  .connect('mongodb://localhost:27017/socal-media')
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    })
  )
  .catch(err => {
    console.log(err);
  });


