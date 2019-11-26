import { Counter } from './Counter'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from './actions'

const mapStateToProps = state => ({
  counter: (state.counter && state.counter.counter) || 0
})

const mapDispatchToProps = dispatch => ({
  incNumber: num => dispatch(incrementCounter(num)),
  decNumber: num => dispatch(decrementCounter(num))
})

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
