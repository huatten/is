import isLeapYear from '../../src/date/is-leapyear'

test('`2020`是闰年', () => {
  expect(isLeapYear(2020)).toBe(true)
})

test('`2020`是闰年', () => {
  expect(isLeapYear('2020')).toBe(true)
})

test('`2021`不是闰年', () => {
  expect(isLeapYear(2021)).toBe(false)
})

test('`1900`不是闰年', () => {
  expect(isLeapYear(1900)).toBe(false)
})

test('`2020年`不是闰年', () => {
  expect(isLeapYear('2020年')).toBe(false)
})

test('`2020Year`不是闰年', () => {
  expect(isLeapYear('2020Year')).toBe(false)
})
