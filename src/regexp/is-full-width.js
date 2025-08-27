/**
 * 检查value是不是包含全角字符
 * @param value
 * @return boolean
 * @example
 *
 * isFullWidth('Hello World')
 * // => false
 *
 * isFullWidth('ＡＢＣ１２３')
 * // => true
 *
 * isFullWidth('你好世界')
 * // => true
 */
import assertString from '../shared/assertString'
const isFullWidth = function (value) {
  assertString(value, 'isFullWidth')
  const fullWidthPattern = /[\uFF01-\uFF60\uFFE0-\uFFE6]/
  return fullWidthPattern.test(value)
}

export default isFullWidth