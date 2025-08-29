import isBase64 from '../../src/regexp/is-base64'

test('`SGVsbG8gV29ybGQ=` 是有效的Base64字符串', () => {
  expect(isBase64('SGVsbG8gV29ybGQ=')).toBe(true)
})

test('`SGVsbG8gV29ybGQ` 是有效的Base64字符串', () => {
  expect(isBase64('SGVsbG8gV29ybGQ')).toBe(true)
})

test('`Invalid_Base64!` 不是有效的Base64字符串', () => {
  expect(isBase64('Invalid_Base64!')).toBe(false)
})

test('空字符串是有效的Base64字符串', () => {
  expect(isBase64('')).toBe(true)
})
