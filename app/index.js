import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { AppContainer } from 'containers/App'
import { store } from './setupStore'

const mountNode = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={createBrowserHistory()}>
      <AppContainer />
    </ConnectedRouter>
  </Provider>,
  mountNode
)

if (module.hot) {
  module.hot.accept('containers/App', () => {
    ReactDOM.unmountComponentAtNode(mountNode)
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={createBrowserHistory()}>
          <AppContainer />
        </ConnectedRouter>
      </Provider>,
      mountNode
    )
  })
}
