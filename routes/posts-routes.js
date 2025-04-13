const express = require('express');

// import cotrollers

const {
  getPosts,
  createPosts,
  updatePost,
  deletePost,
  likePost,
} = require('../controllers/posts-controller');
const  auth  = require('../middleware/auth-middleware');

const router = express.Router();

router.route('/').get(getPosts).post(auth, createPosts);
router.route('/:id').patch(auth, updatePost);
router.route('/:id').delete(auth, deletePost);
router.route('/:id/likePost').patch(auth, likePost);

module.exports =  router;
