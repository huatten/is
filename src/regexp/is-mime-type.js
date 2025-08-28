/**
 * 检查value是不是有效的MIME类型
 * @param value
 * @return boolean
 * @example
 *
 * isMimeType('text/html')
 * // => true
 *
 * isMimeType('application/json')
 * // => true
 *
 * isMimeType('image/png')
 * // => true
 *
 * isMimeType('invalid/mime')
 * // => false
 */
import assertString from '../shared/assertString'
const isMimeType = function (value) {
  assertString(value, 'isMimeType')
  const mimeTypePattern = /^[a-z]+\/[a-z0-9\-\+]+$/i
  return mimeTypePattern.test(value)
}

export default isMimeType
