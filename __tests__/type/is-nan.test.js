import isNaN from '../../src/type/is-nan'

test('NaN是NaN', () => {
  expect(isNaN(NaN)).toBe(true)
})

test('数字不是NaN', () => {
  expect(isNaN(1)).toBe(false)
  expect(isNaN(0)).toBe(false)
  expect(isNaN(-1)).toBe(false)
  expect(isNaN(1.5)).toBe(false)
})

test('字符串数字不是NaN', () => {
  expect(isNaN('1')).toBe(false)
  expect(isNaN('0')).toBe(false)
})

test('字符串不是NaN', () => {
  expect(isNaN('NaN')).toBe(false)
  expect(isNaN('abc')).toBe(false)
  expect(isNaN('')).toBe(false)
})

test('null不是NaN', () => {
  expect(isNaN(null)).toBe(false)
})

test('undefined不是NaN', () => {
  expect(isNaN(undefined)).toBe(false)
})

test('对象不是NaN', () => {
  expect(isNaN({})).toBe(false)
  expect(isNaN({ value: NaN })).toBe(false)
})

test('Infinity不是NaN', () => {
  expect(isNaN(Infinity)).toBe(false)
  expect(isNaN(-Infinity)).toBe(false)
})
