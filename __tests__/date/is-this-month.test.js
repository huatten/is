import isThisMonth from '../../src/date/is-this-month'

test('本月的日期是this month', () => {
  const today = new Date()
  expect(isThisMonth(today)).toBe(true)
})

test('时间戳对应的本月日期是this month', () => {
  const timestamp = Date.now()
  expect(isThisMonth(timestamp)).toBe(true)
})
