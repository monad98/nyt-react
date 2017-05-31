import React from 'react'
import PropTypes from 'prop-types'

const Article = ({ idx, title, author, section, release, url }) => (
  <div>
    <h3>
      <i className="label label-info">{idx}</i>
      <a target="_blank" href={url}>{title}</a>
    </h3>
    <p>{author}</p>
    <p>Section: {section}</p>
    <p>Release: {release}</p>
    <a target="_blank" href={url}>URL: {url}</a>
  </div>
)

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  section: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  // saveArticle: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired
}

export default Article