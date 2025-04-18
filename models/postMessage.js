const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  seletedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model(
  'PostMessage',
  postSchema
);

module.exports = PostMessage;
