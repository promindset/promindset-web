import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { counterReducer } from './reducer'
import { decrementCounter, incrementCounter } from './actions'
import { useInjectReducer } from '../../utils/injectReducer'
import { H1 } from '../../components/H1'
import { GlobalStyle } from '../../global-styles'

const App = ({ incNumber, decNumber, counter }) => {
  useInjectReducer({
    key: 'main',
    reducer: counterReducer
  })

  return (
    <React.Fragment>
      <H1>Promindset Inc.</H1>
      <h2 style={{ textAlign: 'center' }}>{counter}</h2>
      <div style={{ margin: 'auto', width: 'max-content' }}>
        <button className="Increment" onClick={() => incNumber(2)}>
          INC NUM
        </button>
        <button className="Decrement" onClick={() => decNumber(1)}>
          DEC NUM
        </button>
      </div>
      <GlobalStyle />
    </React.Fragment>
  )
}

App.propTypes = {
  counter: PropTypes.number.isRequired,
  decNumber: PropTypes.func.isRequired,
  incNumber: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  counter: (state.main && state.main.counter) || 0
})

const mapDispatchToProps = dispatch => ({
  incNumber: num => dispatch(incrementCounter(num)),
  decNumber: num => dispatch(decrementCounter(num))
})

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)
