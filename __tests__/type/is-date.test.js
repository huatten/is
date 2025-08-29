import isDate from '../../src/type/is-date'

test('Date对象是Date', () => {
  expect(isDate(new Date())).toBe(true)
  expect(isDate(new Date('2020-02-02'))).toBe(true)
  expect(isDate(new Date(0))).toBe(true)
})

test('字符串不是Date', () => {
  expect(isDate('2020-02-02')).toBe(false)
  expect(isDate('')).toBe(false)
})

test('数字不是Date', () => {
  expect(isDate(1234567890)).toBe(false)
  expect(isDate(0)).toBe(false)
})

test('null不是Date', () => {
  expect(isDate(null)).toBe(false)
})

test('undefined不是Date', () => {
  expect(isDate(undefined)).toBe(false)
})

test('对象不是Date', () => {
  expect(isDate({})).toBe(false)
  expect(isDate({ date: new Date() })).toBe(false)
})
