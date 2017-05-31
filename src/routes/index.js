import Layout from '../components/Main'
import SearchRoute from './Search'
import SavedRoute from './Saved'

export default (store) => ({
  path        : '/',
  component   : Layout,
  indexRoute  : SearchRoute(store),
  childRoutes : [
    SavedRoute(store)
  ]
});
