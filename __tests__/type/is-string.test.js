import isString from '../../src/type/is-string'

test('字符串字面量是String', () => {
  expect(isString('1')).toBe(true)
  expect(isString('')).toBe(true)
  expect(isString('hello world')).toBe(true)
})

test('数字不是String', () => {
  expect(isString(123)).toBe(false)
  expect(isString(0)).toBe(false)
  expect(isString(-1)).toBe(false)
})

test('String构造函数创建的是String', () => {
  // eslint-disable-next-line no-new-wrappers
  const newStr = new String(123)
  expect(isString(newStr)).toBe(true)
})

test('String函数创建的是String', () => {
  const str = String(123)
  expect(isString(str)).toBe(true)
})

test('布尔值不是String', () => {
  expect(isString(true)).toBe(false)
  expect(isString(false)).toBe(false)
})

test('null不是String', () => {
  expect(isString(null)).toBe(false)
})

test('undefined不是String', () => {
  expect(isString(undefined)).toBe(false)
})

test('对象不是String', () => {
  expect(isString({})).toBe(false)
  expect(isString({ string: '1' })).toBe(false)
})

test('数组不是String', () => {
  expect(isString([])).toBe(false)
  expect(isString(['1'])).toBe(false)
})

test('函数不是String', () => {
  expect(isString(function () {})).toBe(false)
  expect(isString(() => {})).toBe(false)
})
