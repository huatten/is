/**
 * 判断是不是node环境
 * @return boolean
 */
const isNode = function () {
  // eslint-disable-next-line no-undef
  return typeof global !== 'undefined' && globalThis === global
}

export default isNode
