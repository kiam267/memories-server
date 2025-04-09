import express from 'express';

// import cotrollers

import {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost,
} from '../controllers/posts-controller.js';
import { auth } from '../middleware/auth-middleware.js';

const router = express.Router();

router.route('/').get(getPosts).post(auth, createPosts);
router.route('/:id').patch(auth, updatePost);
router.route('/:id').delete(auth, deletePost);
router.route('/:id/likePost').patch(auth, likePost);

export default router;
