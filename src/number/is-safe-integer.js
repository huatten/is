/**
 * 检查输入是否为安全整数
 *
 * @param {*} input - 任意类型的输入
 * @returns {boolean} 如果输入是安全整数则返回 true，否则返回 false
 *
 * @example
 * ```javascript
 * import isSafeInteger from './is-safe-integer'
 *
 * console.log(isSafeInteger(42)) // true
 * console.log(isSafeInteger(Number.MAX_SAFE_INTEGER)) // true
 * console.log(isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) // false
 * console.log(isSafeInteger(3.14)) // false
 * ```
 */
function isSafeInteger(input) {
  return Number.isSafeInteger(input)
}

export default isSafeInteger
