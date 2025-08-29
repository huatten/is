import isOdd from '../../src/number/is-odd'

test('`3` 是奇数', () => {
  expect(isOdd(3)).toBe(true)
})

test('`-5` 是奇数', () => {
  expect(isOdd(-5)).toBe(true)
})

test('`99.00` 是奇数', () => {
  expect(isOdd(99.0)).toBe(true)
})

test('`12` 不是奇数', () => {
  expect(isOdd(12)).toBe(false)
})

test('`4.5` 不是奇数', () => {
  expect(isOdd(4.5)).toBe(false)
})
