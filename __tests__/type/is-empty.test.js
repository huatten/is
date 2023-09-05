import isEmpty from '../../src/type/is-empty'

test('`null`是空值', () => {
  expect(isEmpty(null)).toBe(true)
})

test('`undefined`是空值', () => {
  expect(isEmpty(undefined)).toBe(true)
})

test('""是空值', () => {
  expect(isEmpty('')).toBe(true)
})

test('"   "是空值', () => {
  expect(isEmpty('   ')).toBe(true)
})

test('`[]`是空值', () => {
  expect(isEmpty([])).toBe(true)
})

test('`{}`是空值', () => {
  expect(isEmpty({})).toBe(true)
})

test('`false`不是空值', () => {
  expect(isEmpty(false)).toBe(false)
})
