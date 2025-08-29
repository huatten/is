import isThisYear from '../../src/date/is-this-year'

test('今年的日期是this year', () => {
  const today = new Date()
  expect(isThisYear(today)).toBe(true)
})

test('时间戳对应的今年日期是this year', () => {
  const timestamp = Date.now()
  expect(isThisYear(timestamp)).toBe(true)
})
