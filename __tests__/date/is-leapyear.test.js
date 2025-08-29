import isLeapYear from '../../src/date/is-leapyear'

test('2020年是闰年', () => {
  expect(isLeapYear(2020)).toBe(true)
})

test('字符串2020年是闰年', () => {
  expect(isLeapYear('2020')).toBe(true)
})

test('2021年不是闰年', () => {
  expect(isLeapYear(2021)).toBe(false)
})

test('1900年不是闰年', () => {
  expect(isLeapYear(1900)).toBe(false)
})

test('2000年是闰年', () => {
  expect(isLeapYear(2000)).toBe(true)
})

test('2020年字符串不是闰年', () => {
  expect(isLeapYear('2020年')).toBe(false)
})

test('2020Year字符串不是闰年', () => {
  expect(isLeapYear('2020Year')).toBe(false)
})

test('无效年份不是闰年', () => {
  expect(isLeapYear('abc')).toBe(false)
  expect(isLeapYear('')).toBe(false)
})
