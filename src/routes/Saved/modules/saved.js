
/**
 * Constants
 */
export const REQUEST_SAVED_ARTICLES = 'REQUEST_SAVED_ARTICLES';
export const LOAD_SAVED_ARTICLES = 'LOAD_SAVED_ARTICLES';
export const REQUEST_DELETING_SAVED_ARTICLE = 'REQUEST_DELETING_SAVED_ARTICLE';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';

/**
 * Actions
 */
export function requestSavedArticles () {
  return {
    type: REQUEST_SAVED_ARTICLES,
    payload: null
  }
}

export function loadSavedArticles (articles) {
  return {
    type: LOAD_SAVED_ARTICLES,
    payload: articles
  }
}

export function fetchSavedArticles () {
  return dispatch => {
    dispatch(requestSavedArticles());
    const url = '/api/saved';
    fetch(url)
      .then(data => data.json())
      .then(articles => dispatch(loadSavedArticles(articles)))
      .catch(function(e) {
        console.log('parsing failed', e)
      })
  }
}

export function requestDeletingArticles () {
  return {
    type: REQUEST_DELETING_SAVED_ARTICLE,
    payload: null
  }
}

export function deleteSuccess (id) {
  return {
    type: DELETE_SUCCESS,
    payload: id
  }
}

export function deleteSavedArticle (id) {
  return dispatch => {
    dispatch(requestDeletingArticles());
    const url = `/api/saved/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then(data => dispatch(deleteSuccess(id)))
      .catch(function(e) {
        console.log('parsing failed', e)
      })
  }
}


/**
 * Reducers
 */
const initialState = {
  isFetching: false,
  isDeleting: false,
  savedArticles: []
}

const savedReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SAVED_ARTICLES: {
      return Object.assign({}, state, { isFetching: true });
    }
    case LOAD_SAVED_ARTICLES:
      return Object.assign({}, state, { savedArticles: action.payload, isFetching: false });

    case REQUEST_DELETING_SAVED_ARTICLE:
      return Object.assign({}, state, { isDeleting: true });

    case DELETE_SUCCESS:
      //payload is id
      const id = action.payload;
      const savedArticles = state.savedArticles.filter(article => article._id !== id);
      return Object.assign({}, state, { savedArticles, isDeleting: false });

    default:
      return state;
  }
};

export default savedReducer;