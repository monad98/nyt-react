import browserHistory from 'react-router/lib/browserHistory'

/**
 * Constant
 */
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

/**
 * Actions
 */
export function locationChange (location = '/') {
  return {
    type    : LOCATION_CHANGE,
    payload : location
  }
}

/**
 * Action creater
 */
export const updateLocation = ({ dispatch }) => {
  return (nextLocation) => dispatch(locationChange(nextLocation))
}

/**
 * Reducer
 */
const initialState = browserHistory.getCurrentLocation()
export default function locationReducer (state = initialState, action) {
  return action.type === LOCATION_CHANGE
    ? action.payload
    : state
}
