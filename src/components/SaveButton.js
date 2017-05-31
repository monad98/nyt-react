/**
 * Created by Hyungwu Pae on 5/31/17.
 */
import React from 'react'
import PropTypes from 'prop-types'

const SaveButton = ({ saveArticle, article }) => (
  <div>
    <button onClick={saveArticle.bind(null, article)} className="pull-right btn btn-info">Save Article</button>
  </div>
)

SaveButton.propTypes = {
  saveArticle: PropTypes.func.isRequired,
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    release: PropTypes.string.isRequired,
    author: PropTypes.string,
    url: PropTypes.string.isRequired
  })
}

export default SaveButton