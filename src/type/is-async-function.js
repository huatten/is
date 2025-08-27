/**
 * 检查value是不是异步函数
 * @param value
 * @return boolean
 * @example
 *
 * isAsyncFunction(async () => {})
 * // => true
 *
 * isAsyncFunction(async function () {})
 * // => true
 *
 * isAsyncFunction(() => {})
 * // => false
 *
 * isAsyncFunction(function () {})
 * // => false
 */
const isAsyncFunction = function (value) {
  return value && typeof value === 'function' && value.constructor.name === 'AsyncFunction'
}

export default isAsyncFunction