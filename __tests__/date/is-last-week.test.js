import isLastWeek from '../../src/date/is-last-week'

test('上周的日期是last week', () => {
  const lastWeek = new Date()
  lastWeek.setDate(lastWeek.getDate() - 7)
  expect(isLastWeek(lastWeek)).toBe(true)
})

test('时间戳对应的上周日期是last week', () => {
  const lastWeekTimestamp = Date.now() - 7 * 24 * 60 * 60 * 1000
  expect(isLastWeek(lastWeekTimestamp)).toBe(true)
})
