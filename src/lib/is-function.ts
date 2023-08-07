import typeOf from './utils/typeOf'
/**
 * 判断是不是函数
 * @param value
 */
const isFunction = function (value: any): boolean {
  return typeOf(value) === 'function' && typeof value === 'function'
}

export default isFunction
