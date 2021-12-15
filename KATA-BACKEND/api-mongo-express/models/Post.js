const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = { Post, PostSchema };
