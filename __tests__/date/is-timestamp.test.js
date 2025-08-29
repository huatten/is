import isTimestamp from '../../src/date/is-timestamp'

test('有效时间戳是timestamp', () => {
  expect(isTimestamp(1628342400000)).toBe(true)
})

test('字符串时间戳不是timestamp', () => {
  expect(isTimestamp('1628342400000')).toBe(false)
})

test('负数不是timestamp', () => {
  expect(isTimestamp(-1628342400000)).toBe(false)
})

test('零不是timestamp', () => {
  expect(isTimestamp(0)).toBe(false)
})

test('无效数字不是timestamp', () => {
  expect(isTimestamp(NaN)).toBe(false)
  expect(isTimestamp(Infinity)).toBe(false)
})
