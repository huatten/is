/**
 * 判断是不是浏览器环境
 * @return boolean
 */
const isBrowser = function (): boolean {
  return typeof window !== 'undefined' && typeof navigator !== 'undefined'
}

export default isBrowser
