import isThisWeek from '../../src/date/is-this-week'

test('本周的日期是this week', () => {
  const today = new Date()
  expect(isThisWeek(today)).toBe(true)
})

test('时间戳对应的本周日期是this week', () => {
  const timestamp = Date.now()
  expect(isThisWeek(timestamp)).toBe(true)
})
