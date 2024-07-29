/**
 * 检查value是不是UUID
 * @param value
 * @return boolean
 * @example

 * isUUID('123e4567-e89b-12d3-a456-426614174000')
 * // => true
 * 
 * isUUID('550e8400-e29b-41d4-a716-446655440000')
 * // => true
 *
 * isUUID('123e4567e89b12d3a456426614174000')
 * // => false 缺少连字符
 *
 * isUUID('550e8400-e29b-41d4-a716-44665544000Z')
 * // => false  包含非法字符
 * 
 * isUUID('550e8400-e29b-41d4-a716')
 * // => false 长度不足
 */
import assertString from '../shared/assertString'
const isUUID = function (value) {
  assertString(value, 'isUUID')
  const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
  return value && uuidPattern.test(value)
}

export default isUUID
