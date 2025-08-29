import isArrayBuffer from '../../src/type/is-arraybuffer'

test('ArrayBuffer对象是ArrayBuffer', () => {
  expect(isArrayBuffer(new ArrayBuffer(10))).toBe(true)
  expect(isArrayBuffer(new ArrayBuffer(0))).toBe(true)
})

test('TypedArray不是ArrayBuffer', () => {
  expect(isArrayBuffer(new Uint8Array(10))).toBe(false)
  expect(isArrayBuffer(new Int16Array(5))).toBe(false)
})

test('普通对象不是ArrayBuffer', () => {
  expect(isArrayBuffer({})).toBe(false)
  expect(isArrayBuffer({ buffer: new ArrayBuffer(10) })).toBe(false)
})

test('null不是ArrayBuffer', () => {
  expect(isArrayBuffer(null)).toBe(false)
})

test('undefined不是ArrayBuffer', () => {
  expect(isArrayBuffer(undefined)).toBe(false)
})

test('字符串不是ArrayBuffer', () => {
  expect(isArrayBuffer('ArrayBuffer')).toBe(false)
})
