/**
 * 检查输入是否为某个数的倍数
 *
 * @param {*} input - 任意类型的输入
 * @param {number} divisor - 除数
 * @returns {boolean} 如果输入是 divisor 的倍数则返回 true，否则返回 false
 *
 * @example
 * ```javascript
 * import isMultipleOf from './is-multiple-of'
 *
 * console.log(isMultipleOf(10, 2)) // true
 * console.log(isMultipleOf(10, 3)) // false
 * console.log(isMultipleOf(15, 5)) // true
 * console.log(isMultipleOf(7, 2)) // false
 * ```
 */
function isMultipleOf(input, divisor) {
  // 检查输入是否为数字且除数不为零
  if (typeof input !== 'number' || typeof divisor !== 'number' || divisor === 0) {
    return false
  }

  // 检查是否为 NaN
  if (Number.isNaN(input) || Number.isNaN(divisor)) {
    return false
  }

  // 检查是否为整数倍数
  return input % divisor === 0
}

export default isMultipleOf
