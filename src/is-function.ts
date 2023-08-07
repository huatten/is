/**
 * 判断是不是函数
 * @param value
 */
const isFunction = function (value: any): boolean {
  return value && typeof value === 'function'
}

export default isFunction
