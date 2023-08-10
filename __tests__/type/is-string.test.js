import isString from '../../src/type/is-string'

test('`123`是字符串', () => {
  expect(isString('1')).toBe(true)
})

test('123不是字符串', () => {
  expect(isString(123)).toBe(false)
})
