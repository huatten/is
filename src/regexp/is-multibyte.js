/**
 * 检查value是不是包含多字节字符
 * @param value
 * @return boolean
 * @example
 *
 * isMultibyte('Hello World')
 * // => false
 *
 * isMultibyte('Héllo Wörld')
 * // => true
 *
 * isMultibyte('你好世界')
 * // => true
 *
 * isMultibyte('こんにちは')
 * // => true
 */
import assertString from '../shared/assertString'
const isMultibyte = function (value) {
  assertString(value, 'isMultibyte')
  const multibytePattern = /[^\x00-\x7F]/
  return multibytePattern.test(value)
}

export default isMultibyte