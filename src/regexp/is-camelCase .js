/**
 * 检查value是不是采用驼峰命名法（camelCase）
 * @param value
 * @return boolean
 * @example
 *
 * isCamelCase('camelCase')
 * // => true
 *
 * isCamelCase('isCamelCase')
 * // => true
 *
 * isCamelCase('singleword')
 * // => true
 *
 * isCamelCase('CamelCase')
 * // => false
 *
 * isCamelCase('camel_case')
 * // => false
 *
 * isCamelCase('camelCase123')
 * // => false
 *
 */

import assertString from '../shared/assertString'
const isCamelCase = function (value) {
  assertString(value, 'isCamelCase')
  const camelCaseRegex = /^[a-z]+([A-Z][a-z]*)*$/
  return value && camelCaseRegex.test(value)
}

export default isCamelCase
