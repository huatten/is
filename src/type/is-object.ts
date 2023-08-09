/**
 * 检查value是不是Object
 * javascript数据类型之Object：https://262.ecma-international.org/7.0/#sec-object-type
 * array function object new Number(0) new String('')
 *
 * @param value
 * @return boolean
 * @example
 *
 * isObject({})
 * // => true
 *
 * isObject([])
 * // => true
 *
 * isObject(Function)
 * // => true
 *
 * isObject(null)
 * // => false
 */
const isObject = function (value: object): boolean {
  return Object(value) === value
}

export default isObject
