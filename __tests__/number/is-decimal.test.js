import isDecimal from '../../src/number/is-decimal'

test('`3.14` 是小数', () => {
  expect(isDecimal(3.14)).toBe(true)
})

test('`-2.5` 是小数', () => {
  expect(isDecimal(-2.5)).toBe(true)
})

test('`0.1` 是小数', () => {
  expect(isDecimal(0.1)).toBe(true)
})

test('`42` 不是小数', () => {
  expect(isDecimal(42)).toBe(false)
})

test('`42.0` 不是小数', () => {
  expect(isDecimal(42.0)).toBe(false)
})

test('`0` 不是小数', () => {
  expect(isDecimal(0)).toBe(false)
})
