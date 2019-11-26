import React from 'react'
import renderer from 'react-test-renderer'
import { NotFound } from '../NotFound'

describe('Not Found Page', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<NotFound />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})
