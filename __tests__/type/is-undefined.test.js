import isUndefined from '../../src/type/is-undefined'

test('undefined是Undefined', () => {
  expect(isUndefined(undefined)).toBe(true)
  expect(isUndefined(void 0)).toBe(true)
})

test('null不是Undefined', () => {
  expect(isUndefined(null)).toBe(false)
})

test('字符串"undefined"不是Undefined', () => {
  expect(isUndefined('undefined')).toBe(false)
})

test('数字不是Undefined', () => {
  expect(isUndefined(0)).toBe(false)
  expect(isUndefined(NaN)).toBe(false)
})

test('空字符串不是Undefined', () => {
  expect(isUndefined('')).toBe(false)
})

test('空对象不是Undefined', () => {
  expect(isUndefined({})).toBe(false)
})

test('空数组不是Undefined', () => {
  expect(isUndefined([])).toBe(false)
})

test('false不是Undefined', () => {
  expect(isUndefined(false)).toBe(false)
})
