/**
 * 检查value是不是包含代理对字符
 * @param value
 * @return boolean
 * @example
 *
 * isSurrogatePair('Hello World')
 * // => false
 *
 * isSurrogatePair('𠮷')
 * // => true
 */
import assertString from '../shared/assertString'
const isSurrogatePair = function (value) {
  assertString(value, 'isSurrogatePair')
  const surrogatePairPattern = /[\uD800-\uDBFF][\uDC00-\uDFFF]/
  return surrogatePairPattern.test(value)
}

export default isSurrogatePair