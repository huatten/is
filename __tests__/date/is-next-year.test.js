import isNextYear from '../../src/date/is-next-year'

test('明年的日期是next year', () => {
  const nextYear = new Date()
  nextYear.setFullYear(nextYear.getFullYear() + 1)
  expect(isNextYear(nextYear)).toBe(true)
})

test('时间戳对应的明年日期是next year', () => {
  const nextYearTimestamp = new Date()
  nextYearTimestamp.setFullYear(nextYearTimestamp.getFullYear() + 1)
  const timestamp = nextYearTimestamp.getTime()
  expect(isNextYear(timestamp)).toBe(true)
})

test('今年的日期不是next year', () => {
  const thisYear = new Date()
  expect(isNextYear(thisYear)).toBe(false)
})

test('去年的日期不是next year', () => {
  const lastYear = new Date()
  lastYear.setFullYear(lastYear.getFullYear() - 1)
  expect(isNextYear(lastYear)).toBe(false)
})
