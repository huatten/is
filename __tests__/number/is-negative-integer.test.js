import isNegativeInteger from '../../src/number/is-negative-integer'

test('`-10` 是负整数', () => {
  expect(isNegativeInteger(-10)).toBe(true)
})

test('`-1` 是负整数', () => {
  expect(isNegativeInteger(-1)).toBe(true)
})

test('`0` 不是负整数', () => {
  expect(isNegativeInteger(0)).toBe(false)
})

test('`-0` 不是负整数', () => {
  expect(isNegativeInteger(-0)).toBe(false)
})

test('`10` 不是负整数', () => {
  expect(isNegativeInteger(10)).toBe(false)
})

test('`-10.99` 不是负整数', () => {
  expect(isNegativeInteger(-10.99)).toBe(false)
})

test('`-10.0` 是负整数', () => {
  expect(isNegativeInteger(-10.0)).toBe(true)
})
