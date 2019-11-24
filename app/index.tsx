import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './containers/App'

ReactDOM.render(
  <App compiler="TypeScript" framework="React" />,
  document.getElementById('app')
)
