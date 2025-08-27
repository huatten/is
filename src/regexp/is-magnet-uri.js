/**
 * 检查value是不是有效的磁力链接
 * @param value
 * @return boolean
 * @example
 *
 * isMagnetURI('magnet:?xt=urn:btih:...')
 * // => true
 *
 * isMagnetURI('magnet:?xt=urn:btih:c12a7...')
 * // => true
 *
 * isMagnetURI('http://example.com')
 * // => false
 */
import assertString from '../shared/assertString'
const isMagnetURI = function (value) {
  assertString(value, 'isMagnetURI')
  const magnetPattern = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&.*/i
  return magnetPattern.test(value)
}

export default isMagnetURI