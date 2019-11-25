import { INC_COUNTER, DEC_COUNTER } from './constants'

export const incrementCounter = amount => ({
  type: INC_COUNTER,
  payload: { amount }
})

export const decrementCounter = amount => ({
  type: DEC_COUNTER,
  payload: { amount }
})
