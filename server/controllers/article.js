'use strict';

const Article = require('../models/article');

const getSavedArticles = function(req, res, next) {
  Article.find({})
    .limit(20)
    .exec()
    .then(articles => res.json(articles))
    .catch(err => next(err));
};

const saveArticle = function (req, res, next) {
  const article = new Article(req.body);
  article.save()
    .then(() => res.status(200))
    .catch(err => next(err));
};

const deleteArticle = function (req, res, next) {
  const _id = req.params.id;
  Article.remove({ _id })
    .then(() => res.status(204))
    .catch(err => next(err));
};

module.exports = {
  getSavedArticles,
  saveArticle,
  deleteArticle
};