/**
 * 检查value是不是Symbol
 * @param value
 * @return boolean
 * @example
 *
 * isSymbol(Symbol(123))
 * // => true
 *
 * isSymbol(1)
 * // => false
 */
import typeOf from '../shared/typeOf'
const isSymbol = function (value) {
  return typeOf(value) === 'symbol'
}

export default isSymbol
