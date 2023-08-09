/**
 * 检查value是不是Array
 * @param value
 * @return boolean
 * @example
 *
 * isArray([])
 * // => true
 *
 * isArray(new Array(10))
 * // => true
 *
 * isArray(document.body.children)
 * // => false
 */
import typeOf from '../shared/typeOf'
const isArray = function (value: any): boolean {
  return (value && Array.isArray(value)) || typeOf(value) === 'array'
}

export default isArray
