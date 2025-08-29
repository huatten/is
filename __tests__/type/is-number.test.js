import isNumber from '../../src/type/is-number'

test('数字是Number', () => {
  expect(isNumber(1)).toBe(true)
  expect(isNumber(0)).toBe(true)
  expect(isNumber(-1)).toBe(true)
  expect(isNumber(1.5)).toBe(true)
  expect(isNumber(Number.MIN_VALUE)).toBe(true)
  expect(isNumber(Number.MAX_VALUE)).toBe(true)
})

test('Infinity是Number', () => {
  expect(isNumber(Infinity)).toBe(true)
  expect(isNumber(-Infinity)).toBe(true)
})

test('NaN不是Number', () => {
  expect(isNumber(NaN)).toBe(false)
})

test('字符串数字不是Number', () => {
  expect(isNumber('1')).toBe(false)
  expect(isNumber('0')).toBe(false)
  expect(isNumber('-1')).toBe(false)
  expect(isNumber('1.5')).toBe(false)
})

test('字符串不是Number', () => {
  expect(isNumber('number')).toBe(false)
  expect(isNumber('')).toBe(false)
})

test('null不是Number', () => {
  expect(isNumber(null)).toBe(false)
})

test('undefined不是Number', () => {
  expect(isNumber(undefined)).toBe(false)
})

test('对象不是Number', () => {
  expect(isNumber({})).toBe(false)
  expect(isNumber({ value: 1 })).toBe(false)
})

test('数组不是Number', () => {
  expect(isNumber([])).toBe(false)
  expect(isNumber([1])).toBe(false)
})

test('布尔值不是Number', () => {
  expect(isNumber(true)).toBe(false)
  expect(isNumber(false)).toBe(false)
})
