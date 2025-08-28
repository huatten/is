/**
 * 检查value是不是包含半角字符
 * @param value
 * @return boolean
 * @example
 *
 * isHalfWidth('Hello World')
 * // => true
 *
 * isHalfWidth('ABC123')
 * // => true
 *
 * isHalfWidth('ＡＢＣ１２３')
 * // => false
 */
import assertString from '../shared/assertString'
const isHalfWidth = function (value) {
  assertString(value, 'isHalfWidth')
  const halfWidthPattern = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/
  return halfWidthPattern.test(value)
}

export default isHalfWidth
