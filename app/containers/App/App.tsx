import React from 'react'
import { H1 } from '../../components/H1'
import { GlobalStyle } from '../../global-styles'

interface AppProps {
  compiler: string
  framework: string
}

export const App: React.FC<AppProps> = props => {
  return (
    <React.Fragment>
      <H1>Promindset Inc.</H1>
      <GlobalStyle />
    </React.Fragment>
  )
}
