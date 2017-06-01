/**
 * Created by Hyungwu Pae on 5/31/17.
 */
import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const mapStateToProps = state => ({ msg : state.notification });


class Notification extends Component {

  render() {
    const { msg } = this.props;
    return (
      <div className="notification">
        {msg && <div className="alert alert-success" role="alert"><strong>{msg}</strong></div>}
      </div>
    )
  }
}

Notification.PropTypes = PropTypes.string.isRequired;

export default connect(mapStateToProps)(Notification);
