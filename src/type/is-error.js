/**
 * 检查value是不是Error对象
 * @param value
 * @return boolean
 * @example
 *
 * isError(new Error())
 * // => true
 *
 * isError(new TypeError())
 * // => true
 *
 * isError(new EvalError())
 * // => true
 *
 * isError({})
 * // => false
 *
 * isError('error')
 * // => false
 */
const isError = function (value) {
  return value instanceof Error
}

export default isError