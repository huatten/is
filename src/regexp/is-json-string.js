/**
 * 检查value是不是有效的JSON字符串
 * @param value
 * @return boolean
 * @example
 *
 * isJSONString('{"name": "John", "age": 30}')
 * // => true
 *
 * isJSONString('[1, 2, 3]')
 * // => true
 *
 * isJSONString('{"name": "John", "age":}')
 * // => false
 *
 * isJSONString('Invalid JSON')
 * // => false
 */
import assertString from '../shared/assertString'
const isJSONString = function (value) {
  assertString(value, 'isJSONString')
  try {
    JSON.parse(value)
    return true
  } catch (e) {
    return false
  }
}

export default isJSONString
