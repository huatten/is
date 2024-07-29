/**
 * 检查value是不是中文
 * @param value
 * @return boolean
 * @example
 *
 * isChinese('你好')
 * // => true
 *
 * isChinese('你好123')
 * // => false
 *
 * isChinese('你2好')
 * // => false
 */
import assertString from '../shared/assertString'
const isChinese = function (value) {
  assertString(value, 'isChinese')
  const chineseRegex = /^[\u4e00-\u9fa5]+$/
  return value && chineseRegex.test(value)
}

export default isChinese
