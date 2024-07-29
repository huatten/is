/**
 * 检查value是不是ArrayLike类数组
 * @param value
 * @return boolean
 * @example
 *
 * isArrayLike([])
 * // => true
 *
 * isArrayLike('hello')
 * // => true (字符串具有 length 属性)
 *
 * isArrayLike({ length: 5 })
 * // => true
 *
 * isArrayLike({ 0: 'a', 1: 'b', length: 2 })
 * // => true
 *
 * isArrayLike(document.querySelectorAll('div'))
 * // => true (NodeList)
 *
 * isArrayLike({})
 * // => false
 */
import typeOf from '../shared/typeOf'
const isArrayLike = function (value) {
  return (
    typeOf(value) !== 'null' &&
    typeOf(value) !== 'function' &&
    typeOf(value.length) === 'number' &&
    value.length >= 0 &&
    Number.isInteger(value.length)
  )
}

export default isArrayLike
