import React from 'react';
import Article from '../../../components/Article';
import SaveButton from '../../../components/SaveButton';
import PropTypes from 'prop-types'

const Results = ({ saveArticle, articles }) => (
  <div className="panel panel-primary">
    <div className="panel-heading">
      <h3 className="panel-title"><i className="glyphicon glyphicon-th-list"></i> Top Articles </h3>
    </div>
    <div className="panel-body">
      {articles.map((article, idx) =>
        (
          <div key={idx} className="row">
            <div className="col-sm-10 col-lg-10 col-md-10">
              <Article idx={idx+1} title={article.title} section={article.section} release={article.release} author={article.author} url={article.url}/>
            </div>
            <div className="col-sm-2 col-lg-2 col-md-2">
              <SaveButton saveArticle={saveArticle} article={article}/>
            </div>
          </div>
        )
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
  saveArticle: PropTypes.func.isRequired
};

export default Results;


