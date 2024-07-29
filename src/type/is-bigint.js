/**
 * 检查value是不是Bigint
 * @param value
 * @return boolean
 * @example
 *
 * isBigInt(1n)
 * // => true
 *
 * isBigInt(BigInt(123))
 * // => true
 *
 * isBigInt(123)
 * // => false
 */
import typeOf from '../shared/typeOf'
const isBigInt = function (value) {
  return typeOf(value) === 'bigint'
}

export default isBigInt
