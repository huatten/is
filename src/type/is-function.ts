import typeOf from '../shared/typeOf'
/**
 * 判断是不是函数
 * @param value
 */
const isFunction = function (value: any): value is (...args: any[]) => any {
  return typeOf(value) === 'function' && typeof value === 'function'
}

export default isFunction
