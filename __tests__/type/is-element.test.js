import isElement from '../../src/type/is-element'

const div = document.createElement('div')
test('`div`是Element', () => {
  expect(isElement(div)).toBe(true)
})

test('`document.body`是Element', () => {
  expect(isElement(document.body)).toBe(true)
})

test('`<div></div>`不是Element', () => {
  expect(isElement('<div></div>')).toBe(false)
})
