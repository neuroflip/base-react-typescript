/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import renderer from 'react-test-renderer'
import Base from '../components/Base'

let container = null

beforeEach(() => {
  container = window.document.createElement('div')
  container.id = 'root'
  window.document.body.appendChild(container)
})

afterEach(() => {
  window.document.body.removeChild(container)
})

it('Flatline Integration test', () => {
  const component = renderer.create(<Base></Base>)
  const tree = component.toJSON()

  expect(tree).toMatchSnapshot()
})
