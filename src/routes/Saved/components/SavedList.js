/**
 * Created by Hyungwu Pae on 5/31/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import DeleteButton from '../../../components/DeleteButton';
import Article from '../../../components/Article'


export default class SavedList extends Component {
  constructor (props) {
    super(props);
    const { fetchSavedArticles } = this.props;
    fetchSavedArticles(); //initialize
  }

  render() {
    const { articles, deleteSavedArticle } = this.props;
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title"><i className="glyphicon glyphicon-th-list"></i> Saved Articles </h3>
        </div>
        <div className="panel-body">
          {articles.map((article, idx) =>
            (
              <div key={idx} className="row">
                <div className="col-sm-10 col-lg-10 col-md-10">
                  <Article idx={idx+1} title={article.title} section={article.section} release={article.release} author={article.author} url={article.url}/>
                </div>
                <div className="col-sm-2 col-lg-2 col-md-2">
                  <DeleteButton deleteSavedArticle={deleteSavedArticle} id={article._id}/>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    )
  }
}

SavedList.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchSavedArticles: PropTypes.func.isRequired,
  deleteSavedArticle: PropTypes.func.isRequired
};



