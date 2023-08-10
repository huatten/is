import isTime24 from '../../src/regexp/is-time24'

// HH:mm:ss
test('`09:30:45` 是合格的24h制时间', () => {
  expect(isTime24('09:30:45')).toBe(true)
})

// HH:mm:ss
test('`14:15:00` 是合格的24h制时间', () => {
  expect(isTime24('14:15:00')).toBe(true)
})

// HH:mm:ss
test('`24:00:00` 不是合格的24h制时间', () => {
  expect(isTime24('24:00:00')).toBe(false)
})

// HH:mm:ss.SSS
test('`23:59:59.999` 是合格的24h制时间', () => {
  expect(isTime24('23:59:59.999')).toBe(true)
})

// HH:mm:ss.SSS
test('`00:00:00.123` 是合格的12h制时间', () => {
  expect(isTime24('00:00:00.123')).toBe(true)
})
