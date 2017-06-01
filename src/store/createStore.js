import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import makeRootReducer from './reducers';
import { updateLocation } from './location';
import { updateMsg } from './notification';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

const createStore = () => {
  /**
   * Middleware Configuration
   */
  const middleware = [thunk];

  /**
   * Store Enhancers
   */
  const enhancers = [];
  let composeEnhancers = compose;

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  /**
   * Store Instantiation and HMR Setup
   */
  const store = createReduxStore(
    makeRootReducer(),
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
  store.asyncReducers = {};

  store.unsubscribeHistory = browserHistory.listen(updateLocation(store));
  socket.on('saved', updateMsg(store));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    });
  }

  return store;
};

export default createStore;
