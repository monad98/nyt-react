/**
 * Created by Hyungwu Pae on 5/30/17.
 */
import { connect } from 'react-redux'
import { fetchArticles } from '../modules/search'
import React, { Component } from 'react';
import PropTypes from 'prop-types'


import Query from '../components/Query'
import Results from '../components/Results'

const mapDispatchToProps = {
  fetchArticles
}

const mapStateToProps = state => ({ articles : state.search.articles });

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
    const { articles, fetchArticles } = this.props;
    return (
      <div>
        <Query fetchArticles={fetchArticles}/>
        {articles.length > 0 && <Results articles={articles}/>}
      </div>
    )

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
