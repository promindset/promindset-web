import React from 'react'
import invariant from 'invariant'
import { ReactReduxContext } from 'react-redux'
import { isString, isEmpty, isFunction } from 'lodash'
import { createReducer } from '../setupStore'

const injectReducerFactory = store => (key, reducer) => {
  invariant(
    isString(key) && !isEmpty(key) && isFunction(reducer),
    'injectReducer: Expected `key` to be a reducer function'
  )

  if (
    Reflect.has(store.injectedReducers, key) &&
    store.injectedReducers[key] === reducer
  )
    return

  store.injectedReducers[key] = reducer
  store.replaceReducer(createReducer(store.injectedReducers))
}

export const useInjectReducer = ({ key, reducer }) => {
  const context = React.useContext(ReactReduxContext)
  React.useEffect(() => {
    injectReducerFactory(context.store)(key, reducer)
  }, [])
}
