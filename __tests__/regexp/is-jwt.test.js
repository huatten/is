import isJWT from '../../src/regexp/is-jwt'

test('有效的JWT返回true', () => {
  const validJWT =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  expect(isJWT(validJWT)).toBe(true)
})

test('无效的JWT返回false', () => {
  expect(isJWT('invalid.jwt.token')).toBe(false)
})

test('随机字符串不是JWT', () => {
  expect(isJWT('usiwiuw.123456.uiuhjiuieud989889')).toBe(false)
})
