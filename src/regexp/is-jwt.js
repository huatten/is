/**
 * 检查value是不是JWT (JSON Web Token)
 * @param value
 * @return boolean
 * @example
 *
 * isJWT('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
 * // => true
 *
 * isJWT('invalid.jwt.token')
 * // => false
 *
 * isJWT('usiwiuw.123456.uiuhjiuieud989889')
 * // => false
 */
import assertString from '../shared/assertString'
const isJWT = function (value) {
  assertString(value, 'isJWT')
  const parts = value.split('.')
  if (parts.length !== 3) {
    return false
  }
  const base64UrlPattern = /^[A-Za-z0-9-_]+$/
  return parts.every((part) => base64UrlPattern.test(part))
}

export default isJWT
