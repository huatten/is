import isTomorrow from '../../src/date/is-tomorrow'

const now = new Date()
const yesterday = new Date(now.setDate(now.getDate() + 1))
test('时间`yesterday`是明天', () => {
  expect(isTomorrow(yesterday)).toBe(true)
})

const current = new Date()
const lastYesterday = new Date(current.setDate(current.getDate() - 2))
test('时间`lastYesterday`不是明天', () => {
  expect(isTomorrow(lastYesterday)).toBe(false)
})

const date = new Date()
test('时间`date`不是明天', () => {
  expect(isTomorrow(date)).toBe(false)
})

test('时间戳`1693899912369`是明天', () => {
  expect(isTomorrow(1693899912369)).toBe(true)
})
