/* eslint-disable no-unused-vars */
export const loggingMiddleware = store => dispatch => action => {
  console.log(action)
  return dispatch(action)
}
