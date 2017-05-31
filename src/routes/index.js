// We only need to import the modules necessary for initial render
import Layout from '../components/Main'
import Home from './Home'
import CounterRoute from './Counter'
import SearchRoute from './Search'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export default (store) => ({
  path        : '/',
  component   : Layout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store),
    SearchRoute(store)
  ]
});
