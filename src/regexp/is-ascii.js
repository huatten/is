/**
 * 检查value是不是只包含ASCII字符
 * @param value
 * @return boolean
 * @example
 *
 * isAscii('Hello World')
 * // => true
 *
 * isAscii('Hello World!')
 * // => true
 *
 * isAscii('Héllo Wörld')
 * // => false
 */
import assertString from '../shared/assertString'
const isAscii = function (value) {
  assertString(value, 'isAscii')
  const asciiPattern = /^[\x00-\x7F]*$/
  return asciiPattern.test(value)
}

export default isAscii
