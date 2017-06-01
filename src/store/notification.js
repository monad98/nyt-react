/**
 * Created by Hyungwu Pae on 6/1/17.
 */

/**
 * Constant
 */
export const ON_NOTIFICATION = 'ON_NOTIFICATION'

/**
 * Actions
 */
export function onNotification (msg) {
  return {
    type    : ON_NOTIFICATION,
    payload : msg
  }
}

/**
 * Action creater
 */
export const updateMsg = ({ dispatch }) => {
  return (msg) => {
    dispatch(onNotification(msg));
    setTimeout(() => dispatch(onNotification('')), 3000); //after 3 seconds, delete notification;
  }
}

/**
 * Reducer
 */
const initialState = '';
export default function notificationReducer (state = initialState, action) {
  return action.type === ON_NOTIFICATION
    ? action.payload
    : state
}
