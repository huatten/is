import isWeekend from '../../src/date/is-weekend'

test('周日是周末', () => {
  const sunday = new Date('01/25/2015')
  expect(isWeekend(sunday)).toBe(true)
})

test('周六是周末', () => {
  const saturday = new Date('01/24/2015')
  expect(isWeekend(saturday)).toBe(true)
})

test('周一不是周末', () => {
  const monday = new Date('01/26/2015')
  expect(isWeekend(monday)).toBe(false)
})

test('时间戳对应的日期是周末', () => {
  const timestamp = 1721750400000 // 周日
  expect(isWeekend(timestamp)).toBe(true)
})
