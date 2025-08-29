import isLastYear from '../../src/date/is-last-year'

test('去年的日期是last year', () => {
  const lastYear = new Date()
  lastYear.setFullYear(lastYear.getFullYear() - 1)
  expect(isLastYear(lastYear)).toBe(true)
})

test('时间戳对应的去年日期是last year', () => {
  const lastYearTimestamp = new Date()
  lastYearTimestamp.setFullYear(lastYearTimestamp.getFullYear() - 1)
  const timestamp = lastYearTimestamp.getTime()
  expect(isLastYear(timestamp)).toBe(true)
})

test('今年的日期不是last year', () => {
  const thisYear = new Date()
  expect(isLastYear(thisYear)).toBe(false)
})

test('明年的日期不是last year', () => {
  const nextYear = new Date()
  nextYear.setFullYear(nextYear.getFullYear() + 1)
  expect(isLastYear(nextYear)).toBe(false)
})
