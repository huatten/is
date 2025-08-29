import isYesterday from '../../src/date/is-yesterday'

test('时间是昨天', () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  expect(isYesterday(yesterday)).toBe(true)
})

test('时间戳是昨天', () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const timestamp = yesterday.getTime()
  expect(isYesterday(timestamp)).toBe(true)
})

test('时间不是昨天', () => {
  const today = new Date()
  expect(isYesterday(today)).toBe(false)
})

test('时间戳不是昨天', () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const timestamp = tomorrow.getTime()
  expect(isYesterday(timestamp)).toBe(false)
})

test('特定时间戳是昨天', () => {
  expect(isYesterday(1692630684039)).toBe(true)
})

test('字符串时间戳不是昨天', () => {
  expect(isYesterday('1692630684039')).toBe(false)
})
