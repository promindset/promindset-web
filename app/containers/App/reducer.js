import { produce } from 'immer'
import { INC_COUNTER, DEC_COUNTER } from './constants'

export const counterReducer = (state = { counter: 0 }, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INC_COUNTER:
        draft.counter += action.payload.amount
        break
      case DEC_COUNTER:
        draft.counter -= action.payload.amount
        break
      default:
        draft
        break
    }
  })
