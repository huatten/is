import isFile from '../../src/type/is-file'

test('File对象是File', () => {
  expect(isFile(new File([], 'test.txt'))).toBe(true)
  expect(isFile(new File(['test content'], 'test.txt'))).toBe(true)
  expect(isFile(new File([], 'test.txt', { type: 'text/plain' }))).toBe(true)
})

test('Blob对象不是File', () => {
  expect(isFile(new Blob())).toBe(false)
  expect(isFile(new Blob(['test content']))).toBe(false)
})

test('普通对象不是File', () => {
  expect(isFile({})).toBe(false)
  expect(isFile({ name: 'test.txt', size: 0 })).toBe(false)
})

test('null不是File', () => {
  expect(isFile(null)).toBe(false)
})

test('undefined不是File', () => {
  expect(isFile(undefined)).toBe(false)
})

test('字符串不是File', () => {
  expect(isFile('file')).toBe(false)
  expect(isFile('test.txt')).toBe(false)
})

test('数组不是File', () => {
  expect(isFile([])).toBe(false)
  expect(isFile([new File([], 'test.txt')])).toBe(false)
})
