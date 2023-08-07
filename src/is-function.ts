/**
 * 判断是不是函数
 * @param value
 */
const isFunction = function (value: string): boolean {
  return value && typeof value === 'function'
}

export default isFunction
