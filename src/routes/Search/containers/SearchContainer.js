/**
 * Created by Hyungwu Pae on 5/30/17.
 */
import { connect } from 'react-redux'
import { fetchArticles, clearArticles, saveArticle } from '../modules/search'
import React, { Component } from 'react';
import PropTypes from 'prop-types'


import Query from '../components/Query'
import Results from '../components/Results'

const mapDispatchToProps = {
  fetchArticles,
  clearArticles,
  saveArticle
};


const mapStateToProps = state => ({ articles : state.search.articles, lastSearchQuery: state.search.lastSearchQuery });

class Search extends Component {

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value.trim()
    });
  }

  render() {
    const { articles, fetchArticles, clearArticles, saveArticle, lastSearchQuery } = this.props;
    return (
      <div>
        <Query fetchArticles={fetchArticles} handleInputChange={this.handleInputChange} clearArticles={clearArticles}/>
        {articles.length > 0 && <Results articles={articles} saveArticle={saveArticle} lastSearchQuery={lastSearchQuery} />}
      </div>
    )
  }
}

Search.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  clearArticles: PropTypes.func.isRequired,
  saveArticle: PropTypes.func.isRequired,
  lastSearchQuery: PropTypes.string.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(Search)
