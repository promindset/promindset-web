import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { loggingMiddleware } from 'utils/loggingMiddleware'

const initialState = {}

export const createReducer = (injectedReducers = {}) => {
  const rootReducer = combineReducers({
    /* eslint-disable no-unused-vars */
    uselessReducer: (state, action) => ({ ...state }),
    ...injectedReducers
  })
  return rootReducer
}

const setupStore = initialState => {
  let composeEnhancers

  if (process.env.NODE_ENV === 'development' && typeof window === 'object') {
    composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  }

  if (process.env.NODE_ENV !== 'development') console.log = function() {}

  composeEnhancers = composeEnhancers
    ? compose(applyMiddleware(loggingMiddleware), composeEnhancers)
    : compose(applyMiddleware(loggingMiddleware))

  const store = createStore(createReducer(), initialState, composeEnhancers)

  store.injectedReducers = {}

  if (module.hot) {
    module.hot.accept(createReducer, () => {
      store.replaceReducer(createReducer(store.injectedReducers))
    })
  }

  return store
}

export const store = setupStore(initialState)
