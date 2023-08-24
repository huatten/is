/**
 * 检查value是不是json
 * @param value
 * @return boolean
 * @example
 *
 * isJSON({})
 * // => true
 *
 * isJSON({name:'KD'})
 * // => true
 *
 * isJSON([1,2,3])
 * // => false
 */
import typeOf from '../shared/typeOf'
const isJSON = function (value) {
  return typeOf(value) === 'object'
}

export default isJSON
