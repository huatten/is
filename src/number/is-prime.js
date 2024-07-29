/**
 * 检查value是不是质数
 * @param value
 * @return boolean
 * @example
 *
 * isPrime(2)
 * // => true
 *
 * isPrime(17)
 * // => true
 *
 * isPrime(4)
 * // => false
 */
import assertNumber from '../shared/assertNumber'
const isPrime = function (value) {
  assertNumber(value, 'isPrime')
  if (value <= 1) return false // 质数必须大于 1
  for (let i = 2; i < value; i++) {
    if (value % i === 0) return false // 如果 value 能被 i 整除，说明 value 不是质数
  }
  return true // 如果 value 没有被 2 到 value-1 的任何数整除，说明 value 是质数
}

export default isPrime
