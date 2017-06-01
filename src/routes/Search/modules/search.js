
/**
 * Constants
 */
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const authKey = "d8966fd97abd46028557596c31b5fd0e";

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const LOAD_ARTICLES = 'LOAD_ARTICLES';
export const CLEAR_ARTICLES = 'CLEAR_ARTICLES';
export const REQUEST_SAVING = 'REQUEST_SAVING';
export const SAVE_SUCCESS = 'SAVE_SUCCESS';

/**
 * Actions
 */
export function requestArticles (qs) {
  return {
    type: REQUEST_ARTICLES,
    payload: qs
  }
}

export function loadArticles (articles) {
  return {
    type: LOAD_ARTICLES,
    payload: articles
  }
}

export function fetchArticles (query) {
  return dispatch => {
    dispatch(requestArticles(query.qs));
    const url = `${queryURLBase}api-key=${authKey}&q=${query.qs}&begin_date=${query.startDate}0101&end_date=${query.endDate}1231`;
    fetch(url)
      .then(data => data.json())
      .then(res => {
        const articles = res.response.docs;
        return dispatch(loadArticles(articles));
      })
      .catch(function(e) {
        console.log('parsing failed', e)
      })
  }
}

export function clearArticles () {
  return {
    type: CLEAR_ARTICLES,
    payload: null
  }
}

export function requestSavingArticle () {
  return {
    type: REQUEST_SAVING,
    payload: null
  }
}

export function saveSuccess () {
  return {
    type: SAVE_SUCCESS,
    payload: null
  }
}
export function saveArticle (article) {
  return dispatch => {
    dispatch(requestSavingArticle());
    const url = '/api/saved'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
      .then(() => dispatch(saveSuccess()))
      .catch(function(e) {
        console.log('parsing failed', e)
      })
  }
}

/**
 * Reducer
 */
const initialState = {
  isFetching: false,
  isSaving: false,
  articles: [],
  lastSearchQuery: ''
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES: {
      return Object.assign({}, state, { isFetching: true, lastSearchQuery: action.payload });
    }
    case LOAD_ARTICLES:
      const articles = action.payload.map(article => ({
        title: article.headline.main,
        section: article.section_name,
        release: article.pub_date,
        author: article.byline ? article.byline.original : "",
        url: article.web_url
      }));
      return Object.assign({}, state, { articles, isFetching: false });

    case CLEAR_ARTICLES:
      return initialState;

    case REQUEST_SAVING:
      return Object.assign({}, state, { isSaving: true });

    case SAVE_SUCCESS:
      return Object.assign({}, state, { isSaving: false });

    default:
      return state;
  }
};

export default searchReducer;