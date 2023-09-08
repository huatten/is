/**
 * 检查value是不是DOM元素
 * @param value
 * @return boolean
 * @example
 *
 * isElement()
 * // => true
 *
 * isElement()
 * // => false
 */
import typeOf from '../shared/typeOf'
const isElement = function (value) {
  return (
    value instanceof Element ||
    (value !== null && typeOf(value) === 'object' && value.nodeType === 1 && typeOf(value.nodeName) === 'string')
  )
}

export default isElement
