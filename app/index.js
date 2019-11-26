import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { AppContainer } from 'containers/App'
import { store } from './setupStore'

const mountNode = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  mountNode
)

if (module.hot) {
  module.hot.accept('containers/App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
      mountNode
    )
  })
}
