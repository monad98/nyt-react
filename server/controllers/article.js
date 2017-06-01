'use strict';
const server = require('../server');
const Article = require('../models/article');

const getSavedArticles = function(req, res, next) {
  Article.find({})
    .limit(20)
    .lean()
    .exec()
    .then(articles => res.json(articles))
    .catch(err => next(err));
};

const saveArticle = function (req, res, next) {
  const article = new Article(req.body);
  article.save()
    .then(saved => {
      res.io.sockets.emit('saved', `Article saved: ${saved.title}`);
      return res.status(200).end()
    })
    .catch(err => next(err));
};

const deleteArticle = function (req, res, next) {
  const _id = req.params.id;
  console.log(_id)
  Article.remove({ _id })
    .then(() => res.status(204).end())
    .catch(err => next(err));
};

module.exports = {
  getSavedArticles,
  saveArticle,
  deleteArticle
};