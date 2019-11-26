import { setupStore } from '../setupStore'

describe('configureStore', () => {
  let store

  beforeAll(() => {
    store = setupStore({})
  })

  describe('injectedReducers', () => {
    it('should contain an object for reducers', () => {
      expect(typeof store.injectedReducers).toBe('object')
    })
  })
})

describe('setupStore params', () => {
  it('should call Redux Devtools', () => {
    const compose = jest.fn()
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = () => compose
    setupStore(undefined)
    expect(compose).toHaveBeenCalled()
  })
})
