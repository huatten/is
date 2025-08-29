import isNextMonth from '../../src/date/is-next-month'

test('下个月的日期是next month', () => {
  const nextMonth = new Date()
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  expect(isNextMonth(nextMonth)).toBe(true)
})

test('时间戳对应的下个月日期是next month', () => {
  const nextMonthTimestamp = new Date()
  nextMonthTimestamp.setMonth(nextMonthTimestamp.getMonth() + 1)
  const timestamp = nextMonthTimestamp.getTime()
  expect(isNextMonth(timestamp)).toBe(true)
})
