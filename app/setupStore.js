import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { loggingMiddleware } from 'utils/loggingMiddleware'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'

const initialState = {}
const history = createBrowserHistory()

export const createReducer = (injectedReducers = {}) => {
  // base of all reducers which allows us to instantiate reducers
  // or injects them by invoking this function with the required reducer.
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers
  })
  return rootReducer
}

export const setupStore = initialState => {
  const composeEnhancers =
    (process.env.NODE_ENV != 'production' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})) ||
    compose

  // Enhancers are some middleware functions for our store such as logging
  // and then we chain required middleware with our compose function.
  const enhancers = applyMiddleware(
    loggingMiddleware,
    routerMiddleware(history)
  )

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(enhancers)
  )

  // To avoid a big mess setting up reducers around we have an injectReducer hook
  // which allows us to inject reducers into the store from within the function itself
  // by using ReactReduxContext instead of importing every reducer in the app.
  store.injectedReducers = {}

  // module.hot is an object provided from webpack-hot-middleware to allow hot reloading
  // our application preserving the state as well (only in development mode)
  if (module.hot) {
    module.hot.accept(createReducer, () => {
      store.replaceReducer(createReducer(store.injectedReducers))
    })
  }

  return store
}

export const store = setupStore(initialState)
