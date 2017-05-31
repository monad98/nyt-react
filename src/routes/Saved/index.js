import { injectReducer } from '../../store/reducers';

//export Saved container component
export default (store) => ({
  path: 'saved',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Saved = require('./containers/SavedContainer').default;
      const reducer = require('./modules/saved').default;

      injectReducer(store, { key: 'saved', reducer });

      cb(null, Saved);
    }, 'saved');
  }
});