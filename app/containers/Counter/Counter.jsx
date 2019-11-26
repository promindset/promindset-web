import React from 'react'
import PropTypes from 'prop-types'
import { counterReducer } from './reducer'
import { useInjectReducer } from 'utils/injectReducer'

export const Counter = ({ incNumber, decNumber, counter }) => {
  useInjectReducer({
    key: 'counter',
    reducer: counterReducer
  })

  return (
    <>
      <hr style={{ width: '50%', margin: 'auto' }} />
      <h2 style={{ textAlign: 'center' }}>{counter}</h2>
      <div style={{ margin: 'auto', width: 'max-content' }}>
        <button style={{ margin: '25px' }} onClick={() => decNumber(1)}>
          DEC NUM
        </button>
        <button style={{ margin: '25px' }} onClick={() => incNumber(1)}>
          INC NUM
        </button>
      </div>
    </>
  )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  decNumber: PropTypes.func.isRequired,
  incNumber: PropTypes.func.isRequired
}
