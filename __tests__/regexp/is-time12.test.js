import isTime12 from '../../src/regexp/is-time12'

// hh:mm:ss
test('`12:34:56` 是合格的12h制时间', () => {
  expect(isTime12('12:34:56')).toBe(true)
})

// hh:mm:ss.SSS
test('`12:34:56.789` 是合格的12h制时间', () => {
  expect(isTime12('12:34:56.789')).toBe(true)
})

// hh:mm:ss AM
test('`09:34:56 AM` 是合格的12h制时间', () => {
  expect(isTime12('09:34:56 AM')).toBe(true)
})

// hh:mm:ss am
test('`09:34:56 am` 是合格的12h制时间', () => {
  expect(isTime12('09:34:56 am')).toBe(true)
})

// hh:mm:ss PM
test('`09:34:56 PM` 是合格的12h制时间', () => {
  expect(isTime12('09:34:56 PM')).toBe(true)
})

// hh:mm:ss pm
test('`09:34:56 pm` 是合格的12h制时间', () => {
  expect(isTime12('09:34:56 pm')).toBe(true)
})

// hh:mm:ss.SSS am
test('`09:34:56:789 am` 是合格的12h制时间', () => {
  expect(isTime12('09:34:56.789 am')).toBe(true)
})

// hh:mm:ss.SSS pm
test('`09:34:56:789 pm` 是合格的12h制时间', () => {
  expect(isTime12('09:34:56.789 pm')).toBe(true)
})

// hh:mm:ss.SSS AM
test('`09:34:56:789 AM` 是合格的12h制时间', () => {
  expect(isTime12('09:34:56.789 AM')).toBe(true)
})

// hh:mm:ss.SSS PM
test('`09:34:56:789 PM` 是合格的12h制时间', () => {
  expect(isTime12('09:34:56.789 PM')).toBe(true)
})

test('`09:00:00am` 不是合格的12h制时间', () => {
  expect(isTime12('09:00:00am')).toBe(false)
})

test('`09:00:00 aM` 不是合格的12h制时间', () => {
  expect(isTime12('09:00:00 aM')).toBe(false)
})

test('`13:00:00` 不是合格的12h制时间', () => {
  expect(isTime12('13:00:00')).toBe(false)
})
