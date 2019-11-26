import React from 'react'
import { H1 } from 'components/H1'
import { GlobalStyle } from 'globalStyles'
import { CounterContainer } from 'containers/Counter'

export const App = () => (
  <>
    <H1>Promindset Inc.</H1>
    <CounterContainer />
    <GlobalStyle />
  </>
)
