/**
 * 检查value是不是ArrayBuffer对象
 * @param value
 * @return boolean
 * @example
 *
 * isArrayBuffer(new ArrayBuffer(10))
 * // => true
 *
 * isArrayBuffer(new Uint8Array(10))
 * // => false
 *
 * isArrayBuffer({})
 * // => false
 *
 * isArrayBuffer(null)
 * // => false
 */
import typeOf from '../shared/typeOf'
const isArrayBuffer = function (value) {
  return typeOf(value) === 'arraybuffer'
}

export default isArrayBuffer
