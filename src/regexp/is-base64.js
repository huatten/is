/**
 * 检查value是不是有效的Base64字符串
 * @param value
 * @return boolean
 * @example
 *
 * isBase64('SGVsbG8gV29ybGQ=')
 * // => true
 *
 * isBase64('SGVsbG8gV29ybGQ')
 * // => true
 *
 * isBase64('Invalid_Base64!')
 * // => false
 */
import assertString from '../shared/assertString'
const isBase64 = function (value) {
  assertString(value, 'isBase64')
  const base64Pattern = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/
  return base64Pattern.test(value)
}

export default isBase64