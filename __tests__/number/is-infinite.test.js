import isInfinite from '../../src/number/is-infinite'

test('`Infinity` 是无限数', () => {
  expect(isInfinite(Infinity)).toBe(true)
})

test('`-Infinity` 是无限数', () => {
  expect(isInfinite(-Infinity)).toBe(true)
})

test('`12/0` 是无限数', () => {
  expect(isInfinite(12 / 0)).toBe(true)
})

test('`1111111` 不是无限数', () => {
  expect(isInfinite(1111111)).toBe(false)
})

test('`-100101010` 不是无限数', () => {
  expect(isInfinite(-100101010)).toBe(false)
})

test('`0` 不是无限数', () => {
  expect(isInfinite(0)).toBe(false)
})
