// ------------------------------------
// Constants
// ------------------------------------
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const authKey = "d8966fd97abd46028557596c31b5fd0e";

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const LOAD_ARTICLES = 'LOAD_ARTICLES';
// ------------------------------------
// Actions
// ------------------------------------
export function requestArticles () {
  return {
    type: REQUEST_ARTICLES,
    payload: null
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
    dispatch(requestArticles());
    const url = `${queryURLBase}api-key=${authKey}&q=${query.qs}&begin_date=${query.startDate}0101&end_date=${query.endDate}1231`;
    fetch(url)
      .then(data => data.json())
      .then(res => {
        console.log(res);
        const articles = res.response.docs;
        return dispatch(loadArticles(articles));
      })
      .catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
}


// export const actions = {
//   requestArticles,
//   loadArticles,
//   fetchArticles
// }

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isFetching: false,
  articles: []
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES: {
      return Object.assign({}, state, { isFetching: true });
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
    default:
      return state;
  }
};

export default searchReducer;