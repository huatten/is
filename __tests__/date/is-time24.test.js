import isTime24 from '../../src/date/is-time24'

test('`09:30:45` 是有效24小时制时间', () => {
  expect(isTime24('09:30:45')).toBe(true)
})

test('`14:15:00` 是有效24小时制时间', () => {
  expect(isTime24('14:15:00')).toBe(true)
})

test('`23:59:59.999` 是有效24小时制时间', () => {
  expect(isTime24('23:59:59.999')).toBe(true)
})

test('`24:00:00` 不是有效24小时制时间', () => {
  expect(isTime24('24:00:00')).toBe(false)
})

test('`00:00:00.123` 是有效24小时制时间', () => {
  expect(isTime24('00:00:00.123')).toBe(true)
})

test('`00:00:00` 是有效24小时制时间', () => {
  expect(isTime24('00:00:00')).toBe(true)
})
