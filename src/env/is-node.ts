/**
 * 判断是不是node环境
 * @param value
 */
const isNode = function (): boolean {
  // eslint-disable-next-line no-undef
  return typeof global !== 'undefined' && globalThis === global
}

export default isNode
