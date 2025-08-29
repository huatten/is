/**
 * 检查输入是否为零
 *
 * @param {*} input - 任意类型的输入
 * @returns {boolean} 如果输入是零则返回 true，否则返回 false
 *
 * @example
 * ```javascript
 * import isZero from './is-zero'
 *
 * console.log(isZero(0)) // true
 * console.log(isZero(-0)) // true
 * console.log(isZero(1)) // false
 * console.log(isZero('0')) // false
 * ```
 */
function isZero(input) {
  return input === 0 || Object.is(input, -0)
}

export default isZero
