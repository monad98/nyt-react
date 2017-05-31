/**
 * Created by Hyungwu Pae on 5/31/17.
 */
import React from 'react'
import PropTypes from 'prop-types'

const DeleteButton = ({ deleteSavedArticle, id }) => (
  <div>
    <button onClick={deleteSavedArticle.bind(null, id)} className="pull-right btn btn-danger">Delete</button>
  </div>
)

DeleteButton.propTypes = {
  deleteSavedArticle: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
}

export default DeleteButton