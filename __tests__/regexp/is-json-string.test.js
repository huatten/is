import isJSONString from '../../src/regexp/is-json-string'

test('`{"name": "John", "age": 30}` 是有效的JSON字符串', () => {
  expect(isJSONString('{"name": "John", "age": 30}')).toBe(true)
})

test('`[1, 2, 3]` 是有效的JSON字符串', () => {
  expect(isJSONString('[1, 2, 3]')).toBe(true)
})

test('`{"name": "John", "age":}` 不是有效的JSON字符串', () => {
  expect(isJSONString('{"name": "John", "age":}')).toBe(false)
})

test('`Invalid JSON` 不是有效的JSON字符串', () => {
  expect(isJSONString('Invalid JSON')).toBe(false)
})
