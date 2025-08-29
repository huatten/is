import isNextWeek from '../../src/date/is-next-week'

test('下周的日期是next week', () => {
  const nextWeek = new Date()
  nextWeek.setDate(nextWeek.getDate() + 7)
  expect(isNextWeek(nextWeek)).toBe(true)
})

test('时间戳对应的下周日期是next week', () => {
  const nextWeekTimestamp = Date.now() + 7 * 24 * 60 * 60 * 1000
  expect(isNextWeek(nextWeekTimestamp)).toBe(true)
})
