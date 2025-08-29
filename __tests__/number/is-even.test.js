import isEven from '../../src/number/is-even'

test('`12` 是偶数', () => {
  expect(isEven(12)).toBe(true)
})

test('`-10` 是偶数', () => {
  expect(isEven(-10)).toBe(true)
})

test('`100.00` 是偶数', () => {
  expect(isEven(100.0)).toBe(true)
})

test('`99.00` 不是偶数', () => {
  expect(isEven(99.0)).toBe(false)
})

test('`9.9` 不是偶数', () => {
  expect(isEven(9.9)).toBe(false)
})
