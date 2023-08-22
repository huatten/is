import isYesterday from '../../src/date/is-yesterday'

const now = new Date()
const yesterday = new Date(now.setDate(now.getDate() - 1))
test('时间`yesterday`是昨天', () => {
  expect(isYesterday(yesterday)).toBe(true)
})

const current = new Date()
const lastYesterday = new Date(current.setDate(current.getDate() - 2))
test('时间`lastYesterday`不是昨天', () => {
  expect(isYesterday(lastYesterday)).toBe(false)
})

const date = new Date()
test('时间`date`不是昨天', () => {
  expect(isYesterday(date)).toBe(false)
})

test('时间戳`1692630684039`是昨天', () => {
  expect(isYesterday(1692630684039)).toBe(true)
})
