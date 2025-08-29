import isMultibyte from '../../src/regexp/is-multibyte'

test('`Hello World` 不包含多字节字符', () => {
  expect(isMultibyte('Hello World')).toBe(false)
})

test('`Héllo Wörld` 包含多字节字符', () => {
  expect(isMultibyte('Héllo Wörld')).toBe(true)
})

test('`你好世界` 包含多字节字符', () => {
  expect(isMultibyte('你好世界')).toBe(true)
})

test('`こんにちは` 包含多字节字符', () => {
  expect(isMultibyte('こんにちは')).toBe(true)
})
