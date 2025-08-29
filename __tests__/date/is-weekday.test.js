import isWeekday from '../../src/date/is-weekday'

test('周一到周五是工作日', () => {
  const monday = new Date('01/26/2015')
  expect(isWeekday(monday)).toBe(true)

  const friday = new Date('01/30/2015')
  expect(isWeekday(friday)).toBe(true)
})

test('周末不是工作日', () => {
  const sunday = new Date('01/25/2015')
  expect(isWeekday(sunday)).toBe(false)

  const saturday = new Date('01/24/2015')
  expect(isWeekday(saturday)).toBe(false)
})

test('时间戳对应的工作日是工作日', () => {
  const timestamp = 1721750400000 // 周三
  expect(isWeekday(timestamp)).toBe(true)
})
