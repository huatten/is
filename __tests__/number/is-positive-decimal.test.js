import isPositiveDecimal from '../../src/number/is-positive-decimal'

test('`122.99` 是正小数', () => {
  expect(isPositiveDecimal(122.99)).toBe(true)
})

test('`0.009` 是正小数', () => {
  expect(isPositiveDecimal(0.009)).toBe(true)
})

test('`0.1` 是正小数', () => {
  expect(isPositiveDecimal(0.1)).toBe(true)
})

test('`100.00` 是正小数', () => {
  expect(isPositiveDecimal(100.0)).toBe(true)
})

test('`100` 不是正小数', () => {
  expect(isPositiveDecimal(100)).toBe(false)
})

test('`0` 不是正小数', () => {
  expect(isPositiveDecimal(0)).toBe(false)
})

test('`-10.99` 不是正小数', () => {
  expect(isPositiveDecimal(-10.99)).toBe(false)
})
