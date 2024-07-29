/**
 * 检查value是不是小写字母
 *
 * @param value
 * @return boolean
 * @example
 *
 * isLowercase('hello')
 * // => true
 *
 * isLowercase('world')
 * // => true
 *
 * isLowercase('Java')
 * // => false
 *
 * isLowercase('ABS12')
 * // => false
 *
 * isLowercase('JavaScript')
 * // => false
 */
import assertString from '../shared/assertString'
const isLowercase = function (value) {
  assertString(value, 'isLowercase')
  const lowercaseRegex = /^[a-z]+$/
  return lowercaseRegex.test(value)
}

export default isLowercase
