/* eslint-disable no-unused-vars */
export const loggingMiddleware = store => next => action => {
  setTimeout(console.log.bind(console, action))
  return next(action)
}
