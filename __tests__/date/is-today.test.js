import isToday from '../../src/date/is-today'

test('时间戳`1628342400000`是今天', () => {
  expect(isToday(1692630684039)).toBe(true)
})

test('时间戳`"1692630684039"`是今天', () => {
  expect(isToday('1692630684039')).toBe(false)
})

test('时间戳`1691610084039`不是今天', () => {
  expect(isToday(1691610084039)).toBe(false)
})

test('`new Date()`是今天', () => {
  expect(isToday(new Date())).toBe(true)
})
