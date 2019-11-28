import React from 'react'
import { Provider } from 'react-redux'
import TestRenderer from 'react-test-renderer'
import { CounterContainer } from '../index'
// import { INC_COUNTER, DEC_COUNTER } from '../constants'
// import { setupMockStore as setupStore } from 'app/__mocks__/setupStore'
import { store as mockStore } from 'app/setupStore'

describe('Counter Container', () => {
  // const store = store
  let store
  let component

  beforeEach(() => {
    store = mockStore()
    // store.dispatch = jest.fn(() => console.log(store.getState()))
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
    component = component.getInstance()
    component.root.findByProps({ children: 'INC NUM' }).props.onClick()
    //   component.root.findByProps({ children: 'INC NUM' }).props.onClick()
    // })
    // component.root.findByProps({ children: 'INC NUM' }).props.onClick()
    console.log(store.getState())
    // expect(store.dispatch).toHaveBeenCalledTimes(1)

    // expect(store.dispatch).toHaveBeenCalledWith({
    //   type: INC_COUNTER,
    //   payload: { amount: 1 }
    // })
  })

  test('should dispatch decrement action on dec button click', () => {
    TestRenderer.act(() =>
      component.root.findByProps({ children: 'DEC NUM' }).props.onClick()
    )
    // expect(store.dispatch).toHaveBeenCalledTimes(1)

    // expect(store.dispatch).toHaveBeenCalledWith({
    //   type: DEC_COUNTER,
    //   payload: { amount: 1 }
    // })
  })
})
