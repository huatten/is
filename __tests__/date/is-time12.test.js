import isTime12 from '../../src/date/is-time12'

test('`12:34:56` 是有效12小时制时间', () => {
  expect(isTime12('12:34:56')).toBe(true)
})

test('`13:00:00` 不是有效12小时制时间', () => {
  expect(isTime12('13:00:00')).toBe(false)
})

test('`12:34:56.789` 是有效12小时制时间', () => {
  expect(isTime12('12:34:56.789')).toBe(true)
})

test('`12:34:56.789 AM` 是有效12小时制时间', () => {
  expect(isTime12('12:34:56.789 AM')).toBe(true)
})

test('`09:34:56 AM` 是有效12小时制时间', () => {
  expect(isTime12('09:34:56 AM')).toBe(true)
})

test('`09:34:56 am` 是有效12小时制时间', () => {
  expect(isTime12('09:34:56 am')).toBe(true)
})

test('`09:34:56 PM` 是有效12小时制时间', () => {
  expect(isTime12('09:34:56 PM')).toBe(true)
})

test('`09:34:56 pm` 是有效12小时制时间', () => {
  expect(isTime12('09:34:56 pm')).toBe(true)
})

test('`09:34:56pm` 不是有效12小时制时间', () => {
  expect(isTime12('09:34:56pm')).toBe(false)
})

test('`09:34:56Pm` 不是有效12小时制时间', () => {
  expect(isTime12('09:34:56Pm')).toBe(false)
})
