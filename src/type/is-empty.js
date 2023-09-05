/**
 * 检查value是不是空值
 * @param value
 * @return boolean
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(undefined)
 * // => true
 *
 * isEmpty('')
 * // => true
 *
 * isEmpty('   ')
 * // => true
 *
 * isEmpty([])
 * // => true
 *
 * isEmpty({})
 * // => true
 *
 * isEmpty(0)
 * // => false
 *
 * isEmpty(false)
 * // => false
 */
import typeOf from '../shared/typeOf'
const isEmpty = function (value) {
  if (value === null || value === undefined) return true
  if (typeOf(value) === 'string' && value.trim() === '') return true
  if (typeOf(value) === 'array' && value.length === 0) return true
  if (typeOf(value) === 'object' && Object.keys(value).length === 0) return true
  return false
}

export default isEmpty
