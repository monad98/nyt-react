/**
 * Created by Hyungwu Pae on 5/30/17.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Query.scss'

export default class Query extends Component {
  constructor(props) {
    super(props);
    this.handleClickClearBtn = this.handleClickClearBtn.bind(this);
    this.initState();
  }

  initState() {
    this.state = {
      qs: '',
      numberOfArticles: 10,
      startDate: '2016', //20160101
      endDate: '2017' //20171231
    };
  }

  handleClickClearBtn() {
    let { clearArticles } = this.props;
    this.initState();
    clearArticles();
  }

  render() {
    let { fetchArticles, handleInputChange } = this.props;
    handleInputChange = handleInputChange.bind(this);
    return (
        <div className='panel panel-primary'>
      <div className='panel-heading'>
        <h3 className='panel-title'><i className='glyphicon glyphicon-list-alt'></i> Search New York Times Articles</h3>
      </div>
      <div className='panel-body'>
        <div className='form'>
          <form>
            <div className='form-group'>
              <label id='search-label' htmlFor='search'>Search Term</label>
              <input onChange={handleInputChange} value={this.state.qs} type='search' name='qs' className='form-control' id='search' placeholder='google, election, war... more than 2 characters' />
            </div>
            <div className='form-group'>
              <label htmlFor='number'>Number of Articles to Retrieve</label>
              <select onChange={handleInputChange} value={this.state.numberOfArticles} className='form-control' id='number' name='numberOfArticles'>
                <option>1</option>
                <option>5</option>
                <option>10</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='start-year'>Start Year (Optional)</label>
              <input onChange={handleInputChange} name='startDate' type='text' className='form-control' id='start-year' placeholder='2016'/>
            </div>
            <div className='form-group'>
              <label htmlFor='end-year'>End Year (Optional)</label>
              <input onChange={handleInputChange} name='endDate' type='text' className='form-control' id='end-year' placeholder='2017'/>
            </div>
          </form>
          <div>
            <button onClick={fetchArticles.bind(null, this.state)} className='btn btn-primary' disabled={this.state.qs.length < 3}><i className='glyphicon glyphicon-search'></i> Search</button>
            <button onClick={this.handleClickClearBtn} className='btn btn-default'><i className='glyphicon glyphicon-trash'></i> Clear Result</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

Query.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  clearArticles: PropTypes.func.isRequired
};

// export default Query;
//TODO: Number Of articles ==> add to state (qs, number of articles)
//TODO: Search Term enter key => search;