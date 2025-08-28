/**
 * 检查value是不是Promise对象
 * @param value
 * @return boolean
 * @example
 *
 * isPromise(Promise.resolve())
 * // => true
 *
 * isPromise(new Promise(() => {}))
 * // => true
 *
 * isPromise({})
 * // => false
 *
 * isPromise(() => {})
 * // => false
 */
const isPromise = function (value) {
  return value instanceof Promise || (value && typeof value.then === 'function')
}

export default isPromise
