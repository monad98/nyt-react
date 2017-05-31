/**
 * Created by Hyungwu Pae on 5/30/17.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types';

// export const Query = ({ articles, fetchArticles }) => {
//   render() (
// )
// };
export default class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qs: '',
      numberOfArticles: 15,
      startDate: '2016', //20160101
      endDate: '2017' //20170530
    }
  }

  handleIputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }



  render() {
    const { articles, fetchArticles } = this.props;
    return (
        <div className='panel panel-primary'>
      <div className='panel-heading'>
        <h3 className='panel-title'><i className='glyphicon glyphicon-list-alt'></i> Search Parameters</h3>
      </div>
      <div className='panel-body'>
        <div className='form'>
          <form>
            <div id='search-group' className='form-group'>
              <label id='search-label' htmlFor='search'>Search Term</label>
              <input type='search' name='qs' className='form-control' id='search' placeholder='google, election, war...'/>
            </div>
            <div className='form-group'>
              <label htmlFor='number'>Number of Articles to Retrieve</label>
              <select defaultValue='15' className='form-control' id='number' name='numberOfArticles'>
                <option>1</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
              </select>
            </div>
            <div className='form-group'>
              <label htmlFor='start-year'>Start Year (Optional)</label>
              <input name='startDate' type='text' className='form-control' id='start-year' placeholder='2016'/>
            </div>
            <div className='form-group'>
              <label htmlFor='end-year'>End Year (Optional)</label>
              <input name='endDate' type='text' className='form-control' id='end-year' placeholder='2017'/>
            </div>
          </form>
          <div>
            <button id='search-btn' className='btn btn-primary'><i className='glyphicon glyphicon-search'></i> Search</button>
            <button id='clear-btn' className='btn btn-default'><i className='glyphicon glyphicon-trash'></i> Clear Result</button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

Query.propTypes = {
  articles: PropTypes.array.isRequired,
  fetchArticles: PropTypes.func.isRequired,
};

// export default Query;
