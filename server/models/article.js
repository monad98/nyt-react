/**
 * Created by Hyungwu Pae on 5/30/17.
 */
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {type: String, index: true},
  section: String,
  release: Date,
  author: String,
  url: {
    type: String,
    default: ''
  }
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
