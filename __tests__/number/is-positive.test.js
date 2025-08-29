import isPositive from '../../src/number/is-positive'

test('`1` 是正数', () => {
  expect(isPositive(1)).toBe(true)
})

test('`0.1` 是正数', () => {
  expect(isPositive(0.1)).toBe(true)
})

test('`100` 是正数', () => {
  expect(isPositive(100)).toBe(true)
})

test('`0` 不是正数', () => {
  expect(isPositive(0)).toBe(false)
})

test('`-1` 不是正数', () => {
  expect(isPositive(-1)).toBe(false)
})

test('`-0.1` 不是正数', () => {
  expect(isPositive(-0.1)).toBe(false)
})
