import React from 'react';
import Article from '../../../components/Article';
import PropTypes from 'prop-types'
import './Results.scss'

const Results = ({ articles }) => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title"><i className="glyphicon glyphicon-th-list"></i> Top Articles </h3>
    </div>
    <div className="panel-body">
      {articles.map((article, idx) =>
        (<Article key={idx} idx={idx} title={article.title} section={article.section} release={article.release} author={article.author} url={article.url} />)
      )}
    </div>
  </div>
);

Results.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      section: PropTypes.string.isRequired,
      release: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  // saveArticle: PropTypes.func.isRequired;
};

export default Results;
