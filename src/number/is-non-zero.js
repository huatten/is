/**
 * 检查输入是否为非零数字
 *
 * @param {*} input - 任意类型的输入
 * @returns {boolean} 如果输入是数字且不为零则返回 true，否则返回 false
 *
 * @example
 * ```javascript
 * import isNonZero from './is-non-zero'
 *
 * console.log(isNonZero(1)) // true
 * console.log(isNonZero(-1)) // true
 * console.log(isNonZero(0)) // false
 * console.log(isNonZero('1')) // false
 * ```
 */
function isNonZero(input) {
  return typeof input === 'number' && input !== 0 && !Number.isNaN(input)
}

export default isNonZero
