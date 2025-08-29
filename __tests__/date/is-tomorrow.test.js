import isTomorrow from '../../src/date/is-tomorrow'

test('时间是明天', () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  expect(isTomorrow(tomorrow)).toBe(true)
})

test('时间戳是明天', () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const timestamp = tomorrow.getTime()
  expect(isTomorrow(timestamp)).toBe(true)
})

test('时间不是明天', () => {
  const today = new Date()
  expect(isTomorrow(today)).toBe(false)
})

test('时间戳不是明天', () => {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const timestamp = yesterday.getTime()
  expect(isTomorrow(timestamp)).toBe(false)
})

test('特定时间戳是明天', () => {
  expect(isTomorrow(1693899912369)).toBe(true)
})
