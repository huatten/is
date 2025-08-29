import isError from '../../src/type/is-error'

test('Error对象是Error', () => {
  expect(isError(new Error())).toBe(true)
  expect(isError(new Error('test error'))).toBe(true)
})

test('TypeError对象是Error', () => {
  expect(isError(new TypeError())).toBe(true)
  expect(isError(new TypeError('type error'))).toBe(true)
})

test('EvalError对象是Error', () => {
  expect(isError(new EvalError())).toBe(true)
  expect(isError(new EvalError('eval error'))).toBe(true)
})

test('ReferenceError对象是Error', () => {
  expect(isError(new ReferenceError())).toBe(true)
  expect(isError(new ReferenceError('reference error'))).toBe(true)
})

test('SyntaxError对象是Error', () => {
  expect(isError(new SyntaxError())).toBe(true)
  expect(isError(new SyntaxError('syntax error'))).toBe(true)
})

test('RangeError对象是Error', () => {
  expect(isError(new RangeError())).toBe(true)
  expect(isError(new RangeError('range error'))).toBe(true)
})

test('普通对象不是Error', () => {
  expect(isError({})).toBe(false)
  expect(isError({ message: 'error' })).toBe(false)
})

test('字符串不是Error', () => {
  expect(isError('error')).toBe(false)
  expect(isError('')).toBe(false)
})

test('null不是Error', () => {
  expect(isError(null)).toBe(false)
})

test('undefined不是Error', () => {
  expect(isError(undefined)).toBe(false)
})

test('数字不是Error', () => {
  expect(isError(123)).toBe(false)
  expect(isError(0)).toBe(false)
})
