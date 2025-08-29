import isBoolean from '../../src/type/is-boolean'

test('布尔值true是Boolean', () => {
  expect(isBoolean(true)).toBe(true)
})

test('布尔值false是Boolean', () => {
  expect(isBoolean(false)).toBe(true)
})

test('数字不是Boolean', () => {
  expect(isBoolean(12)).toBe(false)
  expect(isBoolean(0)).toBe(false)
  expect(isBoolean(1)).toBe(false)
})

test('null不是Boolean', () => {
  expect(isBoolean(null)).toBe(false)
})

test('undefined不是Boolean', () => {
  expect(isBoolean(undefined)).toBe(false)
})

test('字符串不是Boolean', () => {
  expect(isBoolean('true')).toBe(false)
  expect(isBoolean('false')).toBe(false)
})

test('空字符串不是Boolean', () => {
  expect(isBoolean('')).toBe(false)
})

test('对象不是Boolean', () => {
  expect(isBoolean({})).toBe(false)
  expect(isBoolean({ value: true })).toBe(false)
})
