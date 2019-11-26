import React from 'react'
import { store } from 'app/setupStore'
import { Provider } from 'react-redux'
import TestRenderer from 'react-test-renderer'
import { CounterContainer } from '../index'
import { INC_COUNTER, DEC_COUNTER } from '../constants'

describe('Counter Container', () => {
  let component

  beforeEach(() => {
    store.dispatch = jest.fn()
    component = TestRenderer.create(
      <Provider store={store}>
        <CounterContainer />
      </Provider>
    )
  })

  test('snapshot render', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })

  test('should dispatch increment action on inc button click', () => {
    TestRenderer.act(() =>
      component.root
        .findAllByType('button')
        .find(x => x.props.children == ['INC NUM'])
        .props.onClick()
    )
    expect(store.dispatch).toHaveBeenCalledTimes(1)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: INC_COUNTER,
      payload: { amount: 1 }
    })
  })

  test('should dispatch decrement action on dec button click', () => {
    TestRenderer.act(() =>
      component.root
        .findAllByType('button')
        .find(x => x.props.children == ['DEC NUM'])
        .props.onClick()
    )
    expect(store.dispatch).toHaveBeenCalledTimes(1)

    expect(store.dispatch).toHaveBeenCalledWith({
      type: DEC_COUNTER,
      payload: { amount: 1 }
    })
  })
})
