import isTime from '../../src/regexp/is-time'

/*
 ****************************** 24h ******************************
 */

// hh:mm:ss
test('`12:34:56` 是合格的时间', () => {
  expect(isTime('12:34:56')).toBe(true)
})

// hh:mm:ss.SSS
test('`12:34:56.789` 是合格的时间', () => {
  expect(isTime('12:34:56.789')).toBe(true)
})

// hh:mm:ss AM
test('`09:34:56 AM` 是合格的时间', () => {
  expect(isTime('09:34:56 AM')).toBe(true)
})

// hh:mm:ss am
test('`09:34:56 am` 是合格的时间', () => {
  expect(isTime('09:34:56 am')).toBe(true)
})

// hh:mm:ss PM
test('`09:34:56 PM` 是合格的时间', () => {
  expect(isTime('09:34:56 PM')).toBe(true)
})

// hh:mm:ss pm
test('`09:34:56 pm` 是合格的时间', () => {
  expect(isTime('09:34:56 pm')).toBe(true)
})

// hh:mm:ss.SSS am
test('`09:34:56:789 am` 是合格的时间', () => {
  expect(isTime('09:34:56.789 am')).toBe(true)
})

// hh:mm:ss.SSS pm
test('`09:34:56:789 pm` 是合格的时间', () => {
  expect(isTime('09:34:56.789 pm')).toBe(true)
})

// hh:mm:ss.SSS AM
test('`09:34:56:789 AM` 是合格的时间', () => {
  expect(isTime('09:34:56.789 AM')).toBe(true)
})

// hh:mm:ss.SSS PM
test('`09:34:56:789 PM` 是合格的时间', () => {
  expect(isTime('09:34:56.789 PM')).toBe(true)
})

test('`09:00:00am` 不是合格的时间', () => {
  expect(isTime('09:00:00am')).toBe(false)
})

test('`09:00:00 aM` 不是合格的时间', () => {
  expect(isTime('09:00:00 aM')).toBe(false)
})

test('`13:00:00` 是合格的时间', () => {
  expect(isTime('13:00:00')).toBe(true)
})

/*
 ****************************** 24h ******************************
 */

// HH:mm:ss
test('`09:30:45` 是合格的时间', () => {
  expect(isTime('09:30:45')).toBe(true)
})

// HH:mm:ss
test('`14:15:00` 是合格的时间', () => {
  expect(isTime('14:15:00')).toBe(true)
})

// HH:mm:ss
test('`24:00:00` 不是合格的时间', () => {
  expect(isTime('24:00:00')).toBe(false)
})

// HH:mm:ss.SSS
test('`23:59:59.999` 是合格的时间', () => {
  expect(isTime('23:59:59.999')).toBe(true)
})

// HH:mm:ss.SSS
test('`00:00:00.123` 是合格的时间', () => {
  expect(isTime('00:00:00.123')).toBe(true)
})
