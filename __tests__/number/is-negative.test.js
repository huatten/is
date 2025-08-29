import isNegative from '../../src/number/is-negative'

test('`-1` 是负数', () => {
  expect(isNegative(-1)).toBe(true)
})

test('`-0.1` 是负数', () => {
  expect(isNegative(-0.1)).toBe(true)
})

test('`-100` 是负数', () => {
  expect(isNegative(-100)).toBe(true)
})

test('`0` 不是负数', () => {
  expect(isNegative(0)).toBe(false)
})

test('`1` 不是负数', () => {
  expect(isNegative(1)).toBe(false)
})

test('`0.1` 不是负数', () => {
  expect(isNegative(0.1)).toBe(false)
})
