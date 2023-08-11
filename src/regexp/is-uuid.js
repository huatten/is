/**
 * 检查value是不是UUID
 * @param value
 * @return boolean
 * @example

 * isUUID('123e4567-e89b-12d3-a456-426655440000')
 * // => true
 *
 * isUUID('7b77e46d-3af290b74-1eb6b00-c66575ee')
 * // => false
 *
 * isUUID('123e4567-e89b-12d3-a456-42665544000')
 * // => false
 */

const isUUID = function (value) {
  const uuidPattern = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/
  return value && uuidPattern.test(value)
}

export default isUUID
