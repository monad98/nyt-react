import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './Main.scss'

export const Main = ({ children }) => (
  <div>
    <div className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" data-toggle="collapse" data-target=".navbar-collapse" className="navbar-toggle"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><a href="/" className="navbar-brand"><i className="fa fa-compass"></i>New York Times Search</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName='active'>Home</IndexLink></li>
            <li><IndexLink to="/counter" activeClassName='active'>Counter</IndexLink></li>
          </ul>
        </div>
      </div>
    </div>
    <div className='container'>
      {children}
    </div>
  </div>
);
Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
