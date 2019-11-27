import React from 'react'
import { H1 } from 'components/H1'
import { GlobalStyle } from 'globalStyles'
import { CounterContainer } from 'containers/Counter'
import { NotFound } from 'containers/NotFound'

import { Switch, Route } from 'react-router-dom'

export const App = () => (
  <>
    {/* Here we can put a header or even use react-helmet if needed */}
    <H1>Promindset Inc.</H1>
    <Switch>
      <Route exact path="/" component={CounterContainer} />
      <Route component={NotFound} />
    </Switch>
    {/* Here is a good place for a footer */}
    <GlobalStyle />
  </>
)
