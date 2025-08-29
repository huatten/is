import isNonZero from '../../src/number/is-non-zero'

test('`1` 是非零数字', () => {
  expect(isNonZero(1)).toBe(true)
})

test('`-1` 是非零数字', () => {
  expect(isNonZero(-1)).toBe(true)
})

test('`0` 不是非零数字', () => {
  expect(isNonZero(0)).toBe(false)
})

test('`"1"` 不是非零数字', () => {
  expect(isNonZero('1')).toBe(false)
})

test('`NaN` 不是非零数字', () => {
  expect(isNonZero(NaN)).toBe(false)
})

test('`null` 不是非零数字', () => {
  expect(isNonZero(null)).toBe(false)
})

test('`undefined` 不是非零数字', () => {
  expect(isNonZero(undefined)).toBe(false)
})
