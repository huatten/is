import isToday from '../../src/date/is-today'

test('时间戳是今天', () => {
  expect(isToday(1692630684039)).toBe(true)
})

test('字符串时间戳不是今天', () => {
  expect(isToday('1692630684039')).toBe(false)
})

test('另一个时间戳不是今天', () => {
  expect(isToday(1691610084039)).toBe(false)
})

test('new Date()是今天', () => {
  expect(isToday(new Date())).toBe(true)
})

test('今天的日期是今天', () => {
  const today = new Date()
  expect(isToday(today)).toBe(true)
})

test('昨天的日期不是今天', () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  expect(isToday(yesterday)).toBe(false)
})

test('明天的日期不是今天', () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  expect(isToday(tomorrow)).toBe(false)
})
