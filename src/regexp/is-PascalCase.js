/**
 * 检查value是不是采用帕斯卡命名法（isPascalCase）
 * @param value
 * @return boolean
 * @example
 *
 * isPascalCase('PascalCase')
 * // => true
 *
 * isPascalCase('IsPascalCase')
 * // => true
 *
 * isPascalCase('Singleword')
 * // => true
 *
 * isPascalCase('camelCase')
 * // => false
 *
 * isPascalCase('Pascal_Case')
 * // => false
 *
 * isPascalCase('PascalCase123')
 * // => false
 *
 */

import assertString from '../shared/assertString'
const isPascalCase = function (value) {
  assertString(value, 'isPascalCase')
  const pascalCaseRegex = /^[A-Z][a-z]*([A-Z][a-z]*)*$/
  return value && pascalCaseRegex.test(value)
}

export default isPascalCase
