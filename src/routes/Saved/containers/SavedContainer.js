

import { connect } from 'react-redux'
import { fetchSavedArticles, deleteSavedArticle } from '../modules/saved'
import React  from 'react';
import SavedList from '../components/SavedList';

const mapDispatchToProps = {
  fetchSavedArticles,
  deleteSavedArticle
};

const mapStateToProps = state => ({ articles : state.saved.savedArticles });

export default connect(mapStateToProps, mapDispatchToProps)(SavedList)