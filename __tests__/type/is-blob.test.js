import isBlob from '../../src/type/is-blob'

test('Blob对象是Blob', () => {
  expect(isBlob(new Blob())).toBe(true)
  expect(isBlob(new Blob(['test content']))).toBe(true)
})

test('File对象是Blob', () => {
  expect(isBlob(new File([], 'test.txt'))).toBe(true)
  expect(isBlob(new File(['test content'], 'test.txt'))).toBe(true)
})

test('普通对象不是Blob', () => {
  expect(isBlob({})).toBe(false)
  expect(isBlob({ size: 0, type: '' })).toBe(false)
})

test('null不是Blob', () => {
  expect(isBlob(null)).toBe(false)
})

test('undefined不是Blob', () => {
  expect(isBlob(undefined)).toBe(false)
})

test('字符串不是Blob', () => {
  expect(isBlob('blob')).toBe(false)
})

test('数组不是Blob', () => {
  expect(isBlob([])).toBe(false)
  expect(isBlob([new Blob()])).toBe(false)
})
