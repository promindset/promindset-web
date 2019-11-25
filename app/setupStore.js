import { combineReducers, compose, createStore } from 'redux'

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
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development' && typeof window === 'object') {
    composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  }

  const store = createStore(createReducer(), initialState, composeEnhancers())

  store.injectedReducers = {}

  if (module.hot) {
    module.hot.accept(createReducer, () => {
      store.replaceReducer(createReducer(store.injectedReducers))
    })
  }

  return store
}

export const store = setupStore(initialState)
