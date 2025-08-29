import isZero from '../../src/number/is-zero'

test('`0` 是零', () => {
  expect(isZero(0)).toBe(true)
})

test('`-0` 是零', () => {
  expect(isZero(-0)).toBe(true)
})

test('`1` 不是零', () => {
  expect(isZero(1)).toBe(false)
})

test('`-1` 不是零', () => {
  expect(isZero(-1)).toBe(false)
})

test('`"0"` 不是零', () => {
  expect(isZero('0')).toBe(false)
})

test('`null` 不是零', () => {
  expect(isZero(null)).toBe(false)
})

test('`undefined` 不是零', () => {
  expect(isZero(undefined)).toBe(false)
})
