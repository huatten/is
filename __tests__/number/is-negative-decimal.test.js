import isNegativeDecimal from '../../src/number/is-negative-decimal'

test('`-10.99` 是负小数', () => {
  expect(isNegativeDecimal(-10.99)).toBe(true)
})

test('`-.99` 是负小数', () => {
  expect(isNegativeDecimal(-0.99)).toBe(true)
})

test('`-0.1` 是负小数', () => {
  expect(isNegativeDecimal(-0.1)).toBe(true)
})

test('`0` 不是负小数', () => {
  expect(isNegativeDecimal(0)).toBe(false)
})

test('`10.99` 不是负小数', () => {
  expect(isNegativeDecimal(10.99)).toBe(false)
})

test('`-10` 不是负小数', () => {
  expect(isNegativeDecimal(-10)).toBe(false)
})
