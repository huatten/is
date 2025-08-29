import isLastMonth from '../../src/date/is-last-month'

test('上个月的日期是last month', () => {
  const lastMonth = new Date()
  lastMonth.setMonth(lastMonth.getMonth() - 1)
  expect(isLastMonth(lastMonth)).toBe(true)
})

test('时间戳对应的上个月日期是last month', () => {
  const lastMonthTimestamp = new Date()
  lastMonthTimestamp.setMonth(lastMonthTimestamp.getMonth() - 1)
  expect(isLastMonth(lastMonthTimestamp.getTime())).toBe(true)
})

test('本月的日期不是last month', () => {
  const thisMonth = new Date()
  expect(isLastMonth(thisMonth)).toBe(false)
})

test('下个月的日期不是last month', () => {
  const nextMonth = new Date()
  nextMonth.setMonth(nextMonth.getMonth() + 1)
  expect(isLastMonth(nextMonth)).toBe(false)
})
