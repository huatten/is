/**
 * 检查value是不是TypedArray对象
 * @param value
 * @return boolean
 * @example
 *
 * isTypedArray(new Int8Array())
 * // => true
 *
 * isTypedArray(new Uint8Array())
 * // => true
 *
 * isTypedArray(new Float32Array())
 * // => true
 *
 * isTypedArray([])
 * // => false
 *
 * isTypedArray({})
 * // => false
 */
const isTypedArray = function (value) {
  return value && ArrayBuffer.isView(value) && !(value instanceof DataView)
}

export default isTypedArray
