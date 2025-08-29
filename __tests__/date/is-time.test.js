import isTime from '../../src/date/is-time'

test('12小时制时间是有效时间', () => {
  expect(isTime('12:34:56')).toBe(true)
  expect(isTime('12:34:56 am')).toBe(true)
  expect(isTime('12:34:56 AM')).toBe(true)
  expect(isTime('12:34:56 pm')).toBe(true)
  expect(isTime('12:34:56 PM')).toBe(true)
})

test('24小时制时间是有效时间', () => {
  expect(isTime('23:59:00.123')).toBe(true)
  expect(isTime('00:00:00.000')).toBe(true)
  expect(isTime('12:34:56')).toBe(true)
})

test('无效时间不是有效时间', () => {
  expect(isTime('00:00:00.12')).toBe(false)
  expect(isTime('25:00:00.999')).toBe(false)
  expect(isTime('00:00:00.')).toBe(false)
  expect(isTime('abc')).toBe(false)
  expect(isTime('')).toBe(false)
})

test('边界情况测试', () => {
  expect(isTime('00:00:00')).toBe(true)
  expect(isTime('23:59:59')).toBe(true)
  expect(isTime('24:00:00')).toBe(false)
  expect(isTime('12:60:00')).toBe(false)
  expect(isTime('12:30:60')).toBe(false)
})
