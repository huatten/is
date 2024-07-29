/**
 * 检查value是不是大写字母
 *
 * @param value
 * @return boolean
 * @example
 *
 * isUppercase('Java')
 * // => true
 *
 * isUppercase('ABS12')
 * // => false
 *
 * isUppercase('hello')
 * // => false
 *
 * isUppercase('JavaScript')
 * // => false
 */
import assertString from '../shared/assertString'
const isUppercase = function (value) {
  assertString(value, 'isUppercase')
  const uppercaseRegex = /^[A-Z]+$/
  return uppercaseRegex.test(value)
}

export default isUppercase
