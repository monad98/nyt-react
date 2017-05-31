// We only need to import the modules necessary for initial render
import Layout from '../components/Main'
import Home from './Home'
import SearchRoute from './Search'

export default (store) => ({
  path        : '/',
  component   : Layout,
  indexRoute  : Home,
  childRoutes : [
    // CounterRoute(store),
    SearchRoute(store)
  ]
});
