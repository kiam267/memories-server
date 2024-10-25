import express from 'express';

// import cotrollers

import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts-controller.js';

const router = express.Router();

router.route('/').get(getPosts).post(createPosts);

router.route('/:id').patch(updatePost);


router.route('/:id').delete(deletePost);


router.route('/:id/likePost').patch(likePost);

export default router;
