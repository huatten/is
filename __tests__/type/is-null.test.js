import isNull from '../../src/type/is-null'

test('null是null', () => {
  expect(isNull(null)).toBe(true)
})

test('undefined不是null', () => {
  expect(isNull(undefined)).toBe(false)
})

test('字符串"null"不是null', () => {
  expect(isNull('null')).toBe(false)
})

test('数字0不是null', () => {
  expect(isNull(0)).toBe(false)
})

test('空字符串不是null', () => {
  expect(isNull('')).toBe(false)
})

test('空对象不是null', () => {
  expect(isNull({})).toBe(false)
})

test('空数组不是null', () => {
  expect(isNull([])).toBe(false)
})

test('false不是null', () => {
  expect(isNull(false)).toBe(false)
})
