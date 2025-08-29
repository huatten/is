import isSafeInteger from '../../src/number/is-safe-integer'

test('`42` 是安全整数', () => {
  expect(isSafeInteger(42)).toBe(true)
})

test('`Number.MAX_SAFE_INTEGER` 是安全整数', () => {
  expect(isSafeInteger(Number.MAX_SAFE_INTEGER)).toBe(true)
})

test('`Number.MAX_SAFE_INTEGER + 1` 不是安全整数', () => {
  expect(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)).toBe(false)
})

test('`3.14` 不是安全整数', () => {
  expect(isSafeInteger(3.14)).toBe(false)
})

test('`"42"` 不是安全整数', () => {
  expect(isSafeInteger('42')).toBe(false)
})

test('`null` 不是安全整数', () => {
  expect(isSafeInteger(null)).toBe(false)
})

test('`undefined` 不是安全整数', () => {
  expect(isSafeInteger(undefined)).toBe(false)
})
