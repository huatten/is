import isTimestamp from '../../src/date/is-timestamp'

test('`1628342400000`是时间戳', () => {
  expect(isTimestamp(1628342400000)).toBe(true)
})

test('`"1628342400000"`不是时间戳', () => {
  expect(isTimestamp('1628342400000')).toBe(false)
})
