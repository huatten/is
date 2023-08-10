import isString from '../../src/type/is-string'

test('`123`是字符串', () => {
  expect(isString('1')).toBe(true)
})

test('123不是字符串', () => {
  expect(isString(123)).toBe(false)
})

// eslint-disable-next-line no-new-wrappers
const newStr = new String(123)
test('`new String(123)`是字符串', () => {
  expect(isString(newStr)).toBe(true)
})

const str = String(123)
test('`String(123)`是字符串', () => {
  expect(isString(str)).toBe(true)
})
