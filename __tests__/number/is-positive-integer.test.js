import isPositiveInteger from '../../src/number/is-positive-integer'

test('`121212` 是正整数', () => {
  expect(isPositiveInteger(121212)).toBe(true)
})

test('`1` 是正整数', () => {
  expect(isPositiveInteger(1)).toBe(true)
})

test('`0` 不是正整数', () => {
  expect(isPositiveInteger(0)).toBe(false)
})

test('`-10` 不是正整数', () => {
  expect(isPositiveInteger(-10)).toBe(false)
})

test('`10.99` 不是正整数', () => {
  expect(isPositiveInteger(10.99)).toBe(false)
})

test('`10.0` 是正整数', () => {
  expect(isPositiveInteger(10.0)).toBe(true)
})
