/**
 * 检查value是不是采用蛇形命名法（snake_case）
 * @param value
 * @return boolean
 * @example
 *
 * isSnakeCase('snake_case')
 * // => true
 *
 * isSnakeCase('is_snake_case')
 * // => true
 *
 * isSnakeCase('snake_case_123')
 * // => false
 *
 * isSnakeCase('Snake_case')
 * // => false
 *
 * isSnakeCase('snakeCase')
 * // => false
 *
 * isSnakeCase('singleword')
 * // => false
 *
 */

import assertString from '../shared/assertString'
const isSnakeCase = function (value) {
  assertString(value, 'isSnakeCase')
  const snakeCaseRegex = /^[a-z0-9]+(_[a-z0-9]+)*$/
  return value && snakeCaseRegex.test(value)
}

export default isSnakeCase
