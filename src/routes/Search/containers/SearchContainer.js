/**
 * Created by Hyungwu Pae on 5/30/17.
 */
import { connect } from 'react-redux'
import { fetchArticles } from '../modules/search'

import Query from '../components/Query'

const mapDispatchToProps = {
  fetchArticles
}

const mapStateToProps = (state) => {
  console.log(state);
  console.log(state.search.articles);  
  return {
    articles : state.search.articles
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Query)
