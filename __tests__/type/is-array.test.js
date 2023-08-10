import isArray from '../../src/type/is-array'

test('`[]` 是数组', () => {
  expect(isArray([])).toBe(true)
})

test('`new Array(10)` 是数组', () => {
  expect(isArray(new Array(10))).toBe(true)
})

test('`document.body.children` 不是数组', () => {
  expect(isArray(document.body.children)).toBe(false)
})
