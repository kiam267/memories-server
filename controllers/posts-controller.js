import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res, next) => {
  req.headers = {
    ...req.headers,
    'max-http-header-size': '16384',
  };
  try {
    const postMessage = await PostMessage.find();

    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//https://www.youtube.com/watch?v=VsUzmlZfYNg

export const createPosts = async (req, res, next) => {
  const body = req.body;

  const newPost = new PostMessage(body);
  try {
    await newPost.save();
    console.log(newPost);

    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No post with that id');
  }

  const UpatePost = await PostMessage.findByIdAndUpdate(
    _id,
    post,
    {
      new: true,
    }
  );
  res.status(200).json(UpatePost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No delete with that id');
  }
  await PostMessage.findOneAndDelete(_id);

  res
    .status(200)
    .json({ message: 'Post Deleted successfully' });
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!req.user?._id) {
    return res.status(401).json({ message: 'Unauthenticated' });
  }


  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send('No delete with that id');
  }

  const post = await PostMessage.findById(_id);

  // const index = post.likes.findIndex((id) => id === String(re))
  const updatePost = await PostMessage.findByIdAndUpdate(
    _id,
    {
      likeCount: post.likeCount + 1,
    },
    { new: true }
  );

  res.status(200).json(updatePost);
};
