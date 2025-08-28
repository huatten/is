/**
 * 检查value是不是有效的电子邮件地址
 * @param value
 * @return boolean
 * @example
 *
 * isEmail('test@example.com')
 * // => true
 *
 * isEmail('invalid.email')
 * // => false
 *
 * isEmail('test@')
 * // => false
 */
import assertString from '../shared/assertString'
const isEmail = function (value) {
  assertString(value, 'isEmail')
  // Basic email regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailPattern.test(value)
}

export default isEmail
