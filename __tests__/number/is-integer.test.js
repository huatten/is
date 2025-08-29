import isInteger from '../../src/number/is-integer'

test('`42` 是整数', () => {
  expect(isInteger(42)).toBe(true)
})

test('`-5` 是整数', () => {
  expect(isInteger(-5)).toBe(true)
})

test('`0` 是整数', () => {
  expect(isInteger(0)).toBe(true)
})

test('`3.14` 不是整数', () => {
  expect(isInteger(3.14)).toBe(false)
})

test('`42.0` 是整数', () => {
  expect(isInteger(42.0)).toBe(true)
})

test('`NaN` 不是整数', () => {
  expect(isInteger(NaN)).toBe(false)
})
